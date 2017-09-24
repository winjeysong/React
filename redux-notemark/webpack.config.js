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
            },
            //添加css-loader和style-loader
            {
                test: /\.css$/,  //匹配css文件
                use: [  //对目录下的css文件使用这两个loader
                    "style-loader",
                    "css-loader"
                ]
            },
            //添加scss-loader
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                "/Users/winjeysong/Documents/React/redux_notemark/components"
                            ]
                        }
                    }
                ]
            },
            //添加file-loader，识别.eot文件
            {
                test: /\.eot?$/,
                loader: ["file-loader"]
            },
            //添加url-loader，识别.woff,.woff2,.ttf,.svg文件
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.ttf?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "application/octet-stream"
                        }
                    }
                ]
            },
            {
                test: /\.svg?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "image/svg+xml"
                        }
                    }
                ]
            }
        ]
    },
    //配置plugin
    plugins: [
        new HtmlwebpackPlugin({  //用来生成html页面
            title: "redux-notemark"
        })
    ],
    //将jsx扩展名添加入resolve，这样就可以在import中添加jsx扩展名的脚本
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

