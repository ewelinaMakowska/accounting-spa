'use strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill");


module.exports = {
  mode: 'development',
 /*  entry: [
    './src/main.js'
  ],  */
  entry: [
    "babel-polyfill", './src/main.js'
  ], 
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

