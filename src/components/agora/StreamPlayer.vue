<template>
  <div class="agora-video-player" ref="player" :id="domId">
    <p class="agora-video-label">{{domId}}</p>
  </div>
</template>

<script>
export default {
  name: "stream-player",
  props: ["stream", "domId"],
  mounted() {
    console.log("mounted ");
    this.$nextTick(function() {
      if (this.stream && !this.stream.isPlaying()) {
        console.log("mounted ", this.stream.getId());
        this.stream.play(`${this.domId}`, { fit: "cover" }, err => {
          if (err && err.status !== "aborted") {
            console.warn("trigger autoplay policy");
          }
        });
      }
    });
  },
  beforeDestroy() {
    console.log("beforeDestroy ", this.stream.getId());
    // if (this.stream) {
    //   if (this.stream.isPlaying()) {
    //     this.stream.stop();
    //   }
    //   this.stream.close();
    // }
  }
};
</script>

<style lang="scss" scoped>
.agora-video {
  &-player {
    position: relative;
    height: 100%;
    width: 100%;
  }
  &-label {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.8);
    padding: 3px;
  }
}
</style>