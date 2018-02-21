let webpack = require('webpack');
let path = require('path');
module.exports = {
    entry: {
        bundle: './src/main.js'
        // index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|eot|svg|png|jpg|gif)$/,
                use: 'file-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "NODE.ENV": JSON.stringify("development")
        })
    ],
    devServer: {
        open: true,
        port: 9000,
        inline: true,
        noInfo: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map'
    }