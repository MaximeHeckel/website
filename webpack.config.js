
var webpack = require('webpack');

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
        test: /\.css?$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'postcss',
          'autoprefixer?browsers=last 3 versions',
        ],
      }],
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
  ],
};
