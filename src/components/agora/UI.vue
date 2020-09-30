<template>
  <nav class="meeting_ui">
    <ul>
      <li v-if="!disableVideoButton">
        <ToggleButton
          @click="onClickVideo"
          :selected="selectedVideo"
          ref="btn01"
          imageUrlBase="/img/btn_video"
          label="カメラ"
        ></ToggleButton>
      </li>
      <li v-if="!disableMicButton">
        <ToggleButton
          @click="onClickMic"
          :selected="selectedAudio"
          ref="btn02"
          imageUrlBase="/img/btn_mic"
          label="マイク"
        ></ToggleButton>
      </li>
      <li v-if="!disableShareScreenButton">
        <ToggleButton
          @click="onClickShareScreen"
          :selected="selectedShareScreen"
          ref="btn03"
          imageUrlBase="/img/btn_screen"
          label="画面共有"
        ></ToggleButton>
      </li>
      <li>
        <ToggleButton
          @click="onClickJoin"
          :selected="!isJoin"
          ref="btn04"
          imageUrlBase="/img/btn_join"
          label="通話"
        ></ToggleButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import ToggleButton from "./ToggleButton";

export default {
  components: {
    ToggleButton,
  },
  props: {
    disableVideoButton: Boolean,
    disableMicButton: Boolean,
    disableShareScreenButton: Boolean,
  },
  computed: {
    ...mapState("rtc", {
      selectedVideo: (state) => state.video,
      selectedAudio: (state) => state.audio,
      selectedShareScreen: (state) => state.shareScreen,
    }),
    ...mapGetters("rtc", ["isJoin"]),
  },
  methods: {
    onClickVideo(e) {
      this.$emit("enableVideo", this.$refs.btn01._selected);
    },

    onClickMic(e) {
      this.$emit("enableAudio", this.$refs.btn02._selected);
    },

    async onClickShareScreen(e) {
      this.$emit("enableShareScreen", this.$refs.btn03._selected);
    },

    async onClickJoin(e) {
      if (this.$refs.btn04._selected) {
        this.$emit("leave");
      } else {
        this.$emit("join");
      }
    },
  },

  watch: {
    disableShareScreenButton(v) {
      console.log("disableShareScreenButton", v);
    },
  },
};
</script>


<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
}
</style>