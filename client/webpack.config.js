var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: "./client/src/app.js",
  output: { 
    path: __dirname + "/../public/webpack",
    publicPath: "/webpack/",
    filename: "bundle.[hash].js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
      // use this instead to have js generate a <style> tag:
      // { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.[hash].css"),
    new HtmlWebpackPlugin({
      template: "./client/blank.html",
      filename: "views/_webpack_head.html"
    })
  ]
}
