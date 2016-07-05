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
    vendor: Object.keys(pkg.dependencies),
    app: ['webpack-dev-server/client?http://0.0.0.0:5001', 'webpack/hot/only-dev-server', './main.browser']
  },

  output: {
    path: helpers.root('public'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: 'chunk.[id].js'
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
    new webpack.HotModuleReplacementPlugin()
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
