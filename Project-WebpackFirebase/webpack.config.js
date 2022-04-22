const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    // devtool: 'eval-source-map',
    entry: ['./src/app.js', './src/server.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        // When using OptimizeCssAssetsPlugin it overwrites the default JS Minifier and optimizer (which is the terser-webpack-plugin)
        // So we need to add it manually again
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    experiments: {
        topLevelAwait: true,
    },
};
