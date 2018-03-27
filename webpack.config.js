const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
module: {
	}
}

module.export = merge(commonConfig, publicConfig);