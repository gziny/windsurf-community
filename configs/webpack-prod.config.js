const baseConfig = require('./webpack-base.config.js');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
      },
    }),
  ],
});
