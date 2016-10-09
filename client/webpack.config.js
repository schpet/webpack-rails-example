module.exports = {
  entry: "./client/src/app.js",
  output: { 
    path: __dirname + "/../public/webpack",
    publicPath: "/webpack/",
    filename: "bundle.js"
  }
}
