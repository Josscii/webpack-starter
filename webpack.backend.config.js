const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const base = require("./webpack.base.config.js");

const config = {
  target: "node",
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "backend-bundle.js",
  },
  externals: [nodeExternals()],
};

module.exports = merge(base, config);
