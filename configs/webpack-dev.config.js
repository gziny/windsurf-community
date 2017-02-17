const baseConfig = require('./webpack-base.config.js');
const path = require('path');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),                 
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  module: {
      loaders: [
      {
        test: /\.(png|jpg)$/, 
        loader: 'file-loader?name=/images/[name].[ext]',          
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
});
