const merge = require("webpack-merge");
const base = require("./webpack.base.config.js");

const config = {
  entry: "./src/index-admin.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "admin-bundle.js",
  },
};

module.exports = merge(base, config);
