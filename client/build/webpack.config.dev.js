'use strict'
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: [
    'client/src/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}