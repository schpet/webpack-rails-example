var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./client/src/app.js",
  output: { 
    path: __dirname + "/../public/webpack",
    publicPath: "/webpack/",
    filename: "bundle.[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/blank.html",
      filename: "views/_webpack_head.html"
    })
  ]
}
