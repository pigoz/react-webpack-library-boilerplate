const webpack = require('webpack');

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    })
  );
}

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
  output: {
    library: 'library-boilerplate',
    libraryTarget: 'umd',
  },
  plugins,
  resolve: {
    extensions: ['', '.js'],
  },
};
