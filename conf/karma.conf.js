var path = require('path')

module.exports = {

  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: process.cwd(),


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['mocha', 'chai'],


  // list of files / patterns to load in the browser
  files: [
    'tests/**/test-*.js'
  ],


  // list of files to exclude
  exclude: [],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    'src/**/*.js': ['webpack'],
    'tests/**/*.js': ['webpack']
  },

  webpack: {
    resolve: {
      extensions: ['', '.js', '.vue', '.jsx', '.css']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: path.resolve(__dirname, '../node_modules/babel-loader'),
          exclude: [/node_modules/]
        },
        {
          test: /\.vue$/,
          loader: path.resolve(__dirname, '../node_modules/vue-loader'),
          exclude: [/node_modules/]
        }
      ]
    },
    babel: {
      presets: [require('babel-preset-es2015'), require('babel-preset-stage-0')],
      plugins: [require('babel-plugin-transform-runtime')]
    },
    vue: {
      js: 'babel!xo'
    }
  },

  webpackMiddleware: {
    noInfo: true
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['mocha'],


  // web server port
  port: 9898,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: 'INFO',


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome'],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  // Concurrency level
  // how many browser should be started simultanous
  concurrency: Infinity
}
