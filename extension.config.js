const webpack = require("webpack");
const path = require("path");
const srcDir = path.join(__dirname, ".", "src");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(srcDir, "extension/manifest.json"), to: path.join(__dirname, "./dist") },
        { from: path.join(srcDir, "extension/logo.png"), to: path.join(__dirname, "./dist") },
        { from: path.join(srcDir, "extension/devtool.html"), to: path.join(__dirname, "./dist") },
      ],
    }),
  ],
  entry: {
    background: path.join(srcDir, "extension/background.ts"),
    content_script: path.join(srcDir, "extension/content_script.ts"),
    devtool: path.join(srcDir, "extension/devtool.ts"),
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background"
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.png|html$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
        type: 'javascript/auto'
     }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  }
};