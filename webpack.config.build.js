const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/components/RadioButtonGroup.js'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
};
