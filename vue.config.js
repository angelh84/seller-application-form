const path = require("path");
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.vue', '.json']
    }
  },
  assetsDir: "application-form"
}