var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: [
      'webpack-hot-middleware/client',
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  }
}