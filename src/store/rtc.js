
import RTCClient from "../components/agora/js/rtc";

const client = new RTCClient()

export default {
  namespaced: true,

  state: {
    client: client,
    mainStream: null,
    localStream: null,
    shareStream: null,

    audio: true,
    video: true,
    shareScreen: true,
  },

  mutations: {

    mainStream(state, v) {
      console.log("commit/mainStream", v)
      state.mainStream = v
    },

    localStream(state, v) {
      state.localStream = v
    },

    shareStream(state, v) {
      state.shareStream = v
    },

    video(state, v) {
      console.log("video", v)
      state.video = v
    },

    audio(state, v) {
      console.log("audio", v)
      state.audio = v
    },
  },

  actions: {
    async joinChannel({ commit }, option) {
      await client.joinChannel(option)
    },


    async publishStream({ commit, state }) {
      let stream = await client.publishStream(state.audio, state.video)
      console.log(">>> publishStream", stream)
      commit("localStream", stream)
    },


    async leaveChannel({ commit }) {
      await client.leaveChannel()
      commit("localStream", null)
    },

    async shareScreenStart({ commit }, { shareid }) {
      let stream = await client.shareStart(shareid)
      console.log("shareScreenStart", stream)
      commit("shareStream", stream)

      return stream != null
    },

    async shareScreenEnd({ commit }) {
      await client.shareEnd()
      commit("shareStream", null)
    }
  },

  getters: {
    isJoin: state => state.localStream != undefined
  },
}