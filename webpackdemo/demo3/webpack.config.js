var path = require("path");
module.exports = {
  entry: path.join(__dirname, "index"),
  output: {
    path: __dirname,
    filename: "bundle.js"
    //publicPath: 由于示例不作线上打包，所以不用配置该项
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //匹配css文件
        use: [  //对目录下的css文件使用这两个loader
          "style-loader",
          "css-loader"
        ]  
      }
    ]
  }
}