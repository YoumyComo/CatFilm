const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const merge = require('webpack-merge');
const devConfig = {

    entry: path.join(__dirname, 'src/index.js'),
    
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js'
    }
};
module.exports = merge(commonConfig, devConfig);