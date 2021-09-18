const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: { index: '/' }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
    })],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
};