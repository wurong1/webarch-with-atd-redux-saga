'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    browser: [
      'react-hot-loader/patch',
      path.join(__dirname, 'app/entry/index.js')
    ],
    common: ['react', 'react-router']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/entry/index.html',
      filename: 'index.html',
      favicon: 'favicon.ico',
      inject: false,
      title: 'Front-end arch',
      chunks: ['common', 'browser']
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      chunks: ['browser']
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.js?$/,
      exclude: /[node_modules|lib]/,
      loader: 'eslint'
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/i,
      loader: ExtractTextPlugin.extract("css-loader!autoprefixer-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }, {
      test: /\.woff(2)?(\?[a-z0-9]+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
      loader: "file-loader?name=i/[name].[ext]"
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file-loader?name=i/[name].[ext]'
    }]
  }
};
