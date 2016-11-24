const webpack = require('webpack');
const path = require("path");

const PROD = JSON.parse(process.env.PROD_ENV || 'false');

const dev = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './dev/entry.jsx'
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
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ]
};

const build = {
  entry: ['./src/js/entry.jsx'],
  output: {
    path: path.resolve('./js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: []
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    root: path.resolve('./src/js'),
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
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
  ]
};

module.exports = PROD ? build : dev;