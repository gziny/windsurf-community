const babelrc = require('./.babelrc');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'tests.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'tests.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: babelrc,
          },
          {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'null',
          },
          {
            test: /\.scss$/,
            loader: 'null',
          },
        ],
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
