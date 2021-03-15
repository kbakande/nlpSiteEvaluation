const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "index.html",
        })
    ]
};