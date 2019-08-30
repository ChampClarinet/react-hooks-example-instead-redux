'use-strict';

//imports
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//declare variables
const appDir = fs.realpathSync(process.cwd()) //get app root's absolute path
const resolveApp = relativePath => path.resolve(appDir, relativePath);

//declare paths need to clean before build.
let pathsToClean = ['dist', 'build'];
let cleanOptions = {
    root: __dirname,
    verbose: false,
    dry: false
}

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
    output: {
        filename: 'assets/js/[name].[hash:8].js',
        chunkFilename: 'assets/js/[name].[hash:8].chunk.js',
        path: resolveApp('dist'),
        publicPath: '/',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    devServer: {
        contentBase: './src/index.js',
        compress: true,
        port: 1234,
        historyApiFallback: true,
        quiet: true
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            Lang: path.resolve(__dirname, 'src/lang/'),
            Redux: path.resolve(__dirname, 'src/redux/'),
            Routes: path.resolve(__dirname, 'src/routes/'),
            Utils: path.resolve(__dirname, 'src/utils/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$./,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ?
            "warning" : false
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets/img', to: 'assets/img' },
            { from: 'src/assets/fonts', to: 'assets/fonts' },
            { from: 'public/favicon.ico', to: 'assets' },
            { from: 'public/manifest.json', to: '.' }
        ]),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[hash:8].css"
        })
    ]
};