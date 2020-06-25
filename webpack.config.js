const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // development模式打包出来的文件是未压缩的 production模式打包出来的文件是压缩的
    entry: ['./app/index.js', './app/addImage.js'],
    output: {
        filename: 'bundle.js', // 打包后删除文件的文件名
        path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
        publicPath: './' // 知道如何寻找资源
    },
    module: {
        rules: [
            // ES6转ES5
            {
                test: /\.js$/, // js文件才使用babel
                use: 'babel-loader', // 使用哪个loader
                exclude: /node_modules/ // 不包括路径
            },
            // 图片格式正则
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader', // 配置url-loader的可选项
                        options: {
                            esModule: false,
                            // 限制图片大小10000B 小于限制会将图片转换为base64格式
                            limit: 1000, 
                            // 超出限制 创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            // 处理CSS文件
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', // 让CSS支持import 并且会解析CSS文件
            //         {
            //             loader: 'css-loader', // 并且可以将解析出来的CSS通过标签的形式插入HTML中 这个依赖于'style-loader'
            //             options: {
            //                 modules: true // 开启CSS模块化的选项 所以.test被转成唯一的哈希值 这样就解决了CSS的变量名重复问题
            //             }
            //         }
            //     ]
            // },
            // 处理CSS文件打包成一个单独的文件
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }]
                })
            }
        
        ]
    },
    plugins: [
        // 输出的文件路径
        new ExtractTextPlugin("css/[name].[hash].css"),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'test.html',
        })
    ]
}

