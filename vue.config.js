module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/css/styles.scss";'
      }
    }
  },
}