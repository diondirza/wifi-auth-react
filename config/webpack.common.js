const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const METADATA = {
  title: '[app_name] Website',
  baseUrl: '/'
};

module.exports = {
  metadata: METADATA,

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules'],
    alias: {
      'jquery': 'jquery/src/jquery.js',
      'typed.js': 'typed.js/js/typed.js'
    }
  },

  context: helpers.root('src'),

  module: {
    preLoaders: [
      {
        test: /(\.jsx|\.js)$/,
        include: helpers.root('src'),
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /\.(jsx|js)$/,
        include: helpers.root('src'),
        loaders: ['babel']
      },
      {
        test: /\.s?(c)ss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(ttf|png|jpe?g|eot|woff2?)$/,
        //loader: 'file?name=/[path][name].[ext]',
        loaders: [
          'file?hash=sha512&digest=hex&name=/[path][hash:6].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CopyWebpackPlugin([
      { from: 'assets/images/logo-midtrans-color.png', to: 'assets/images' },
      { from: 'assets/images/success.png', to: 'assets/images' },
      { from: 'assets/images/failed.png', to: 'assets/images' },
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: helpers.packageSort([
        'vendor',
        'app'
      ])
    })
  ],

  postcss: [autoprefixer],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
