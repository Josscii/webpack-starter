const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

const config = {
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
};

module.exports = merge(base, config);
