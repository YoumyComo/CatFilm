const merge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {

}

module.export = merge(commonConfig, publicConfig);