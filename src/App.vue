<template>
  <div id="app">
    <ReadyPage v-if="!isJoin" @join="onClickJoin"></ReadyPage>
    <Meeting ref="meeting" v-show="isJoin" :appid="appid" :shareid="shareid" @leave="onClickLeave"></Meeting>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ReadyPage from "./pages/ReadyPage.vue";
import Meeting from "./components/agora/Meeting.vue";
import { Utils } from "./components/agora/js/core/Utils";
import RTMClient from "./components/agora/js/rtm";

export default {
  name: "App",
  components: {
    ReadyPage,
    Meeting,
  },
  data() {
    return {
      appid: "c02b8a27221e4c40a290aead0cfd6af8",
      shareid: 777,
    };
  },
  mounted() {
    this.rtm = new RTMClient();
    this.rtm.init(this.appid);
    this.rtm.login("U0001");
  },
  computed: {
    ...mapGetters("rtc", ["isJoin"]),
  },
  methods: {
    async onClickJoin() {
      let channel = Utils.getQuery("channel") || "test",
        token = null;
      await this.$refs.meeting.join(channel, token);
    },

    async onClickLeave() {
      await this.$refs.meeting.leave();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

  width: 100%;
  height: 100%;
}
</style>
