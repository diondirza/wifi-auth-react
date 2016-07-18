const pkg = require('../package.json');
const helpers = require('./helpers');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

/**
 * Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = merge(commonConfig.metadata, {
  host: 'localhost',
  port: 5000,
  ENV: ENV,
  HMR: HMR
});

module.exports = merge.smart(commonConfig, {
  metadata: METADATA,

  debug: true,

  devtool: 'cheap-module-source-map',

  entry: {
    vendor: [
      'jquery',
      'materialize-css',
      'react',
      'react-dom',
      'react-router',
      'classnames',
      'typed.js'
    ],
    app: ['./main.browser']
  },

  output: {
    path: helpers.root('public'),
    filename: 'assets/scripts/[name].bundle.js',
    sourceMapFilename: 'assets/scripts/[name].map',
    chunkFilename: 'assets/scripts/chunk.[id].js',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot']
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'HMR': METADATA.HMR,
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('public')
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
});
