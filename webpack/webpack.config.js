const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@': path.resolve('src/'),
            'Components': path.resolve('src/components'),
            'Pages': path.resolve('src/pages'),
            'Store': path.resolve('src/store'),
        }
    },
    module: {
        rules: [{
            test: /\.(ts|js|css)x?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                },
            ]
        },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: "bundle.js",
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new ErrorOverlayPlugin(),
    ],
    devtool: 'cheap-module-source-map'
};