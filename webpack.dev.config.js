const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const base = require("./webpack.base.config");

const config = {
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
};

module.exports = merge(base, config);
