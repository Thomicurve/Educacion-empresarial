const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
        clean: true,
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.(jpg|png|svg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new Dotenv(),
    ],
    devServer: {
        compress: true,
        port:  3000,
        open: true,
        historyApiFallback: true,
    }
}