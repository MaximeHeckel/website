
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entryBase = ['./src/index.js'];

if (process.env.ENV === 'DEV') {
  entryBase.push('webpack-dev-server/client?http://localhost:8080');
}

module.exports = {
  entry: entryBase,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
  ],
};
