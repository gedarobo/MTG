var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    proxy: {
      '/api/*': {
        changeOrigin: true,
        target: 'https://api.deckbrew.com/mtg/'
      }
    }
  }
};