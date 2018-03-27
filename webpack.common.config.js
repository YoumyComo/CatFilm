const path = require('path');
const webpack = require('webpack');

commonConfig = {
	entry:  path.join(__dirname,'src/index.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].[chunkhash]js',
		chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
	},
	module: {
		// rules: [{
		// 	test: /\.js$/,
		// 	use: ['babel-loader?cachaeDirectory=true'],
		// 	include: path.join(__dirname, 'src')
		// },{
		// 	test:/\.(png|jpg|gif)$/,
		// 	use: [{
		// 		loader: 'url-loader',
		// 		options: {
		// 			limit: 8192
		// 		}
		// 	}]
		// }]
	},
	plugins: [

	],
	resolve: {
		alias: {

		}
	}
}

module.export = commonConfig;