var path = require("path");
module.exports = {
  entry: path.join(__dirname, "index"),
  output: {
    path: __dirname,
    filename: "bundle.js"
    //publicPath: 由于示例不作线上打包，所以不用配置该项
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
}