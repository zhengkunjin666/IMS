const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  outputDir: "../public/admin",
  indexPath:
    process.env.NODE_ENV === "production"
      ? "../../views/admin.tpl"
      : "admin.tpl",
  publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/",
});
