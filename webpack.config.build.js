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
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
