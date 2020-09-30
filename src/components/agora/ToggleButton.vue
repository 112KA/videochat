<template>
  <button @click="onClick" :class="{toggleButton: true, disabled:!enabled}">
    <img :src="imageUrl" alt />
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    selected: Boolean,
    imageUrlBase: String,
  },

  data() {
    return {
      _selected: true,
      enabled: true,
      imageUrl: undefined,
    };
  },

  mounted() {
    this.setSelected(this.selected);
  },

  methods: {
    setSelected(v) {
      this._selected = v;
      let state = this._selected ? "_on" : "_off";
      this.imageUrl = this.imageUrlBase + state + ".png";
    },

    onClick(e) {
      this.setSelected(!this._selected);

      this.$emit("click");
    },

    _enabled(v) {
      this.enabled = v;
    },
  },

  watch: {
    selected(v, v0) {
      this.setSelected(v);
    },
  },
};
</script>

<style lang="scss" scoped>
.toggleButton {
  font-size: 10px;
  text-align: center;

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

img {
  display: block;
  width: auto;
  max-width: none;
  margin: 0 auto 5px;
}
</style>