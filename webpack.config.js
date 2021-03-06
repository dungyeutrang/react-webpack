const webpack = require('webpack');
var config = {
    entry: './src/client/app/main.js',

    output: {
        path: './',
        filename: 'build/[name].js',
    },
    //
    // devServer: {
    //     inline: true,
    //     port: 8080
    // },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}

module.exports = config;