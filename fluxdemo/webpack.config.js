var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

/************************** 常用路径 ****************************/
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");
/************************** 常用路径 ****************************/

module.exports = {
    //入口文件
    entry: {
        app: path.resolve(APP_PATH, "app.jsx")
    },
    output: {
        path: BUILD_PATH,
        filename: "bundle.js"
    },
    //开启dev source map
    devtool: "eval-source-map",
    //开启webpack dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },

    module: {
        rules: [
            //添加eslint-loader并设置为pre
            {
                test: /\.jsx?$/,
                enforce: "pre",
                loader: ["eslint-loader"],
                include: APP_PATH
            },
            //添加babel-loader
            {
                test: /\.jsx?$/,
                loader: ["babel-loader"],
                include: APP_PATH
            }
        ]
    },
    //配置plugin
    plugins: [
        new HtmlwebpackPlugin({  //用来生成html页面
            title: "fluxdemo"
        })
    ],
    //将jsx扩展名添加入resolve，这样就可以在import中添加jsx扩展名的脚本
    resolve: {
        extensions: [".js", ".jsx"]
    },
}

