const path = require('path');
const HtmlsWebpackPlugin = require('htmls-webpack-plugin')
const HappyPack = require('happypack');
//const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ejs = require('ejs');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const jsonloader = require('json-loader')
let jses = "bundle.js";
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'happypack/loader']
            },

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: 'img/'
                    }
                }],

            },

        ],

    },
//<%= jses %>
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*", },
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        hot: 'only',
        //contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true,
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlsWebpackPlugin({
            htmls: [{
                src: 'src/index.ejs',
                filename: 'index.html',
            }],
        }),
        new HappyPack({
            loaders: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }),
        new CleanWebpackPlugin(),
       // new HardSourceWebpackPlugin()

    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
}
