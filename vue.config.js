const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
