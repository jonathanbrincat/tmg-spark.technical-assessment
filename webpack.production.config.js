/* eslint-disable */
'use strict';

const 	path 							= require('path'),
		config 							= require('./build/config');

const 	webpack 						= require('webpack'),
		merge 							= require('webpack-merge'),
		baseWebpackConfig				= require('./webpack.base.config');

const	DuplicatePackageCheckerPlugin 	= require("duplicate-package-checker-webpack-plugin"),
		UglifyJsPlugin 					= require('uglifyjs-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
	mode: 'production',

	devtool: config.prod.sourceMap ? '#source-map' : false,
	
	output: {
		path: path.resolve(__dirname, './dist')
	},

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: config.prod.sourceMap
			})
		]
	},
	
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': config.prod.env
		}),

		new DuplicatePackageCheckerPlugin(),

		new webpack.optimize.OccurrenceOrderPlugin()
	]
})
