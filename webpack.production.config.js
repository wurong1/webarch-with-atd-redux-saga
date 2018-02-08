'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var clean = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: {
    browser: path.join(__dirname, 'app/entry/index.js'),
    common: ['react', 'react-router']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-[chunkhash].min.js',
    publicPath: '/'
  },
  plugins: [
    new clean(['../dist']),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[hash].min.js',
      chunks: ['browser']
    }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/entry/index.html',
      filename: 'index.html',
      favicon: 'favicon.ico',
      inject: false,
      title: 'Front-end arch',
      chunks: ['common', 'browser'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('[name]-[contenthash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.js?$/,
      exclude: /[node_modules|lib]/,
      loader: 'eslint'
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]'})
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader'})
    }, {
      test: /\.(woff(2)?|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file-loader?name=i/[name].[ext]'
    }]
  }
};
