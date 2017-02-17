const autoprefixer = require('autoprefixer');
const babelrc = require('./.babelrc');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {  
  entry: {
    app: path.join(__dirname, '../src/index.js'),
    vendor: path.join(__dirname, '../src/vendor.js'),
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      // Files
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[hash].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[hash].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[hash].[ext]' },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/,
      },
      // Styles
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!resolve-url!sass?sourceMap',
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
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
  postcss() {
    return [autoprefixer];
  }  
};
