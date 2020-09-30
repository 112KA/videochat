<template>
  <div class="screen">
    <div v-show="mainStream" class="screen_share">
      <StreamPlayer :stream="mainStream" :domId="mainStream.getId()" v-if="mainStream"></StreamPlayer>
    </div>
    <div v-show="!mainStream">
      <p>Local stream</p>
      <div class="agora-video">
        <StreamPlayer :stream="localStream" :domId="localStream.getId()" v-if="localStream"></StreamPlayer>
      </div>

      <p>Remote stream</p>
      <div class="screen_remote">
        <div class="agora-video" :key="index" v-for="(remoteStream, index) in remoteStreams">
          <StreamPlayer :stream="remoteStream" :domId="remoteStream.getId()"></StreamPlayer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import StreamPlayer from "./StreamPlayer";

export default {
  components: {
    StreamPlayer,
  },
  data() {
    return {
      remoteStreams: [],
    };
  },
  computed: {
    ...mapState("rtc", {
      localStream: (state) => state.localStream,
      mainStream: (state) => state.mainStream,
    }),
  },
  methods: {
    clearRemoteStreams() {
      this.remoteStreams = [];
    },
    addRemoteStream(stream) {
      if (!this.remoteStreams.find((it) => it.getId() === stream.getId())) {
        this.remoteStreams.push(stream);
      }
    },
    removeRemoteStream(id) {
      this.remoteStreams.map((item, index) => {
        if (item.getId() === id) {
          this.remoteStreams[index].close();
          this.remoteStreams.splice(index, 1);
          return 1;
        }
        return 0;
      });
      // this.remoteStreams = this.remoteStreams.filter(it => it.getId() !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.agora-video {
  width: 320px;
  height: 240px;
  margin: 20px;
}

.screen {
  width: 100%;
  height: 100%;
  &_share {
    width: 100%;
    height: 100%;
  }

  &_remote {
    display: flex;
  }
}
</style>