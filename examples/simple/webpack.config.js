const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: path.resolve(__dirname, './index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    alias: {
      'library-boilerplate': path.join(__dirname, '..', '..', 'src'),
    },
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
};
