const webpack = require('webpack');
const path = require("path");

const PROD = JSON.parse(process.env.PROD_ENV || 'false');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/js/entry.jsx'
  ],
  output: {
    path: path.resolve('./js'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  },
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
      })
    ] : [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ]
};