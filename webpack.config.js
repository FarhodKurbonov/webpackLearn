'use strict';
let path = require('path');

module.exports = {
  context: path.resolve(__dirname, "frontend"),
  entry:   './main',
  output:  {
    path:     path.resolve(__dirname, "public"),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [{
      test:   /\.js$/,
      loader: "babel",
      query: {
        presets:['es2015']
      }
    },
      {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.css$/,
      // .../node_modules/css-loader/index.js!.../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!.../frontend/menu/menu.css
      loader: 'style!css!'
    }, 
     {
       test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  }

};



