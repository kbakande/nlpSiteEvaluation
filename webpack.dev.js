const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/client/index.js",
    devServer: {
        writeToDisk: true,
        injectClient: false
    },
    output: {
        clean: true, // Clean the output directory before emit.
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "index.html",
        }),
        // new CleanWebpackPlugin({
        //     // Simulate the removal of files
        //     // cleanOnceBeforeBuildPatterns: ['./js/build/*', './css/build/*'],
        //     dry: true,
        //     // Write Logs to Console
        //     verbose: true,
        //     // Automatically remove all unused webpack assets on rebuild
        //     cleanStaleWebpackAssets: true,
        //     protectWebpackAssets: false
        // }),
        new BundleAnalyzerPlugin(),
        new WorkboxPlugin.GenerateSW()
    ]
};