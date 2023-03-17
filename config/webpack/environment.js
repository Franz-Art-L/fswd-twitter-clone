const { environment } = require('@rails/webpacker')
const sassLoader = require('sass-loader');
const cssLoader = require('css-loader');
const path = require('path')

environment.loaders.append('sass', {
  test: /\.scss$/,
  use: [
    'style-loader',
    cssLoader,
    sassLoader
  ]
});

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@utils': path.resolve(__dirname, '..', '..', 'app/javascript/src/utils'),
    }
  }
}

environment.config.merge(customConfig);

// Uncomment below to enable split chunks
environment.splitChunks()

module.exports = environment
