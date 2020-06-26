const path = require('path');
// 从bundle中提取CSS到单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 简单创建HTML文件，用于服务器访问
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // development模式打包出来的文件是未压缩的 production模式打包出来的文件是压缩的
    entry: ['./app/index.js', './app/addImage.js'], // 向entry属性传入（文件路径数组）将创建“多个主入口”。当你想要多个依赖文件一起注入，并且将他们的依赖导向到一个chunk时候，传入数组的方式就很有用
    output: {
        filename: 'bundle.js', // 打包后输出文件的文件名
        path: path.resolve(__dirname, 'build'), // 使用绝对地址，输出文件夹 到 /buiild 下
        publicPath: './' // 输出解析文件的目录 url相对于打包后的HTML页面
    },
    module: {
        rules: [
            // ES6转ES5
            {
                test: /\.js$/, // js文件才使用babel
                use: 'babel-loader', // 使用哪个loader
                exclude: /node_modules/ // 不转译node_modules目录 这样babel-loader快些
            },
            // 图片
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader', 
                        // 配置url-loader的可选项
                        options: {
                            // 不生成使用ES模块语法的JS模块
                            esModule: false, 
                            // 限制图片大小10000B 小于限制会将图片转换为base64格式
                            limit: 1000, 
                            // 超出限制 创建的文件格式
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
                    // 当CSS没有被提取
                    fallback: 'style-loader',
                    use: [{
                        // 将资源转换成一个CSS模块导出
                        loader: 'css-loader',
                        options: {
                            // 启动CSS模块
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
        // 
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'test.html',
        })
    ]
}

