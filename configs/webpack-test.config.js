const babelrc = require('./.babelrc');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, '../configs/tests.js'),
    vendor: path.join(__dirname, '../src/vendor.js'),
  },
  devtool: 'source-map',
  output: {
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    path: path.join(__dirname, '../test'),
    publicPath: 'http://localhost:5000/',
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null',
      },
      {
        test: /\.scss$/,
        loader: 'null',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelrc,
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
  },
  eslint: {
    configFile: path.join(__dirname, './.eslintrc.js'),
    emitError: true,
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/test.html'),
    }),
  ],
};
