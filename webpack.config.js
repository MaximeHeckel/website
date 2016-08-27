
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var atImport = require('postcss-import');
var vars = require('postcss-simple-vars');

var entryBase = ['./src/index.js'];
var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  new ExtractTextPlugin('styles.css'),
];

if (process.env.ENV === 'DEV') {
  entryBase.push('webpack-dev-server/client?http://localhost:8080');
}

if (process.env.ENV === 'PROD') {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));
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
        test: /\.css$/,
        exclude: /(github-markdown|normalize|react-select)\.css$/,
        // eslint-disable-next-line max-len
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minify!postcss-loader', { allChunks: true }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/img/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [
    atImport({
      path: ['node_modules', './src'],
    }),
    vars(),
    // Other PostCSS plugins
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './',
  },
  plugins: plugins,
};
