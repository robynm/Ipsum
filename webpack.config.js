var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './js/src/main.js',
	output: {
	 	path: path.resolve(__dirname, 'js/dist'),
	 	filename: 'main.bundle.js'
 },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules\/.*/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};
