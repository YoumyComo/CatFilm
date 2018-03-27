const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const merge = require('webpack-merge');


const devConfig = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    resolve: {
        alias: {
              pages: path.join(__dirname, 'src/pages'),
              components: path.join(__dirname, 'src/components'),
              router: path.join(__dirname, 'src/router'),
        }
    }
}
module.exports = merge(commonConfig, devConfig);