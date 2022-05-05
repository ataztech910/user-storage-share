const { merge } = require("webpack-merge");
const common = require("./extension.config.js");

module.exports = merge(common, {
  mode: "production",
});