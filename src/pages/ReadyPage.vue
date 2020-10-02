<template>
  <div class="ready">
    <div>
      <ul>
        <li>
          <a href="https://jp.vcube.com/service/agora" target="_blank"
            >Agora SDK</a
          >を使ったビデオチャットサンプル(画面共有も可)
        </li>
        <li>
          URLのchannelクエリを指定すると、任意の通話チャンネルをつくれる。
          <br />例) https://112ka.github.io/videochat/?channel=test
        </li>
        <li>
          <a href="https://docs.agora.io/cn/faq/browser_support" target="_blank"
            >ブラウザサポート</a
          >
          <br />※画面共有については
          <a
            href="https://docs.agora.io/en/Video/screensharing_web?platform=Web"
            target="_blank"
            >Safariは非サポート</a
          >
        </li>
        <li>
          <a
            href="https://github.com/112KA/videochat"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
        </li>
      </ul>
      <UI
        disableShareScreenButton
        @enableVideo="onEnableVideo"
        @enableAudio="onEnableAudio"
        @join="onClickJoin"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import UI from "@/components/agora/UI";

export default {
  components: {
    UI,
  },
  computed: {},
  methods: {
    onEnableVideo(v) {
      this.$store.commit("rtc/video", v);
    },
    onEnableAudio(v) {
      this.$store.commit("rtc/audio", v);
    },
    async onClickJoin(v) {
      this.$emit("join");
    },
  },
};
</script>

<style lang="scss" scoped>
.ready {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    margin-bottom: 2em;
  }

  li {
    list-style: square inside;
    margin: 0.7em 0 0;
    line-height: 1.5;
    a {
      text-decoration: underline;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>