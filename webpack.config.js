const webpack = require('webpack');
const path = require("path");

const PROD = JSON.parse(process.env.PROD_ENV || 'false');

module.exports = {
  context: __dirname,
  entry: ["./src/js/entry.jsx"],
  output: {
    path: path.resolve('./'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    root: path.resolve('./src/js'),
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })] : []
};
