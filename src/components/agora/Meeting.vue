<template>
  <div class="meeting">
    <UI
      class="meeting_ui"
      @enableVideo="onEnableVideo"
      @enableAudio="onEnableAudio"
      @enableShareScreen="onEnableShareScreen"
      @leave="onClickLeave"
      ref="ui"
    />
    <ScreenView ref="screen"></ScreenView>
  </div>
</template>

<script>
import { mapState } from "vuex";

import UI from "./UI";
import ScreenView from "./ScreenView";

export default {
  components: {
    ScreenView,
    UI,
  },
  props: {
    appid: String,
    shareid: Number,
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapState("rtc", {
      rtc: (state) => state.client,
      localStream: (state) => state.localStream,
      shareStream: (state) => state.shareStream,
      selectedVideo: (state) => state.video,
      selectedAudio: (state) => state.audio,
    }),
  },
  methods: {
    async join(channel, token) {
      this.rtc.on("stream-added", this.onAdded);
      this.rtc.on("stream-subscribed", this.onSubscribed);
      this.rtc.on("stream-removed", this.onRemoved);
      this.rtc.on("peer-online", this.onPeerOnline);
      this.rtc.on("peer-leave", this.onPeerLeave);

      await this.$store.dispatch("rtc/joinChannel", {
        appid: this.appid,
        channel,
        token,
      });

      await this.$store.dispatch("rtc/publishStream");
    },

    async leave() {
      this.$refs.screen.clearRemoteStreams();

      this.$store.commit("rtc/mainStream", null);
      this.shareScreenEnd();
      await this.$store.dispatch("rtc/leaveChannel");

      this.rtc.off("stream-added", this.onAdded);
      this.rtc.off("stream-subscribed", this.onSubscribed);
      this.rtc.off("stream-removed", this.onRemoved);
      this.rtc.off("peer-online", this.onPeerOnline);
      this.rtc.off("peer-leave", this.onPeerLeave);
    },

    onEnableVideo(v) {
      this.$store.commit("rtc/video", v);
      console.log("this.localStream", this.localStream);
      if (v) {
        this.localStream.enableVideo();
      } else {
        this.localStream.disableVideo();
      }
    },

    onEnableAudio(v) {
      this.$store.commit("rtc/audio", v);
      if (v) {
        this.localStream.enableAudio();
      } else {
        this.localStream.disableAudio();
      }
    },

    async onEnableShareScreen(v) {
      console.log("onEnableShareScreen", v);
      if (v) {
        this.shareScreenEnd();
      } else {
        let ret = await this.$store.dispatch("rtc/shareScreenStart", {
          shareid: this.shareid,
        });
        if (!ret) {
          this.shareScreenEnd();
        }
      }
    },

    async shareScreenEnd() {
      // this.shareStream.off("stopScreenSharing", this.shareScreenEnd);
      if (this.shareStream) {
        await this.$store.dispatch("rtc/shareScreenEnd");
      }
    },

    async onClickLeave(e) {
      this.$emit("leave");
    },

    onAdded(e) {
      let { stream } = e;
      console.log("[agora] [stream-added] stream-added", stream.getId());

      if (stream.getId() === this.shareid) {
        if (!this.shareStream) {
          this.$refs.ui.$refs.btn03._enabled(false);
        }

        this.$store.commit("rtc/mainStream", stream);
      }

      this.rtc.client.subscribe(stream);
    },

    onSubscribed(e) {
      let { stream } = e;
      console.log("[agora] [stream-subscribed] stream-added", stream.getId());
      this.$refs.screen.addRemoteStream(stream);
    },

    onRemoved(e) {
      let { stream } = e;
      console.log("[agora] [stream-removed] stream-removed", stream.getId());

      console.log("onRemoved", stream.getId());
      if (stream.getId() === this.shareid) {
        this.$refs.ui.$refs.btn03._enabled(true);
        this.$refs.ui.$refs.btn03.setSelected(true);
        this.$store.commit("rtc/mainStream", null);
      }
      this.$refs.screen.removeRemoteStream(stream.getId());
    },

    onPeerOnline(e) {
      console.log(`Peer ${e.uid} is online`);
    },

    onPeerLeave(e) {
      console.log(`Peer ${e.uid} already leave`);
      this.$refs.screen.removeRemoteStream(e.uid);
    },
  },

  watch: {
    shareStream(v) {
      console.log("***************************");
      console.log(">>>>> shareStream", v);
      console.log("***************************");
      if (v) {
        this.shareStream.on("stopScreenSharing", this.shareScreenEnd);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.meeting {
  position: relative;
  width: 100%;
  height: 100%;

  &_ui {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 100;

    width: auto;
  }
}

.meeting_ui ::v-deep ul {
  margin-left: -50%;
}
</style>