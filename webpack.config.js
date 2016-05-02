/* eslint-disable */

var path = require('path');
var webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'stage-0', 'react', 'react-hmre']
        }
      }
    ]
  }
};
