var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
    "faker",
    "lodash",
    "react",
    "react-dom",
    "react-input-range",
    "react-redux",
    "react-router",
    "redux",
    "redux-form",
    "redux-thunk"
];//THIS WILL BE INCLUDED IN THE VENDOR.JS

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test: /\.js$/,
        exclude:/node_modules/ //assume node files are already transpilled
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }
    ]
  }
};
