const path = require('path');
const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

commonConfig = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
	},
	module: {
    	rules: [{
    		test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
    	    }
    	]
	},
	plugins: [
	],
	resolve: {
		alias: {
              // pages: path.join(__dirname, 'src/pages'),
		}
	}
}

module.export = commonConfig;