const { merge } = require("webpack-merge");
const common = require("./extension.config.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
});