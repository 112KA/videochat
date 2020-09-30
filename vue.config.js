module.exports = {
  publicPath: './',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/css/styles.scss";'
      }
    }
  },
}