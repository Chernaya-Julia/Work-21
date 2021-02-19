const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: env.NODE_ENV,
        entry: ['./src/script.js', './src/style.scss'],
        output: {
            path: resolve(__dirname, './dist'),
            filename: 'index.[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.(s?a?)?css$/,
                    //use: ['style-loader','css-loader'],
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],

                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
            })
        ]
    };
}