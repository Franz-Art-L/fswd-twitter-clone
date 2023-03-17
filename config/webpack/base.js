const path = require('path');
const { webpackConfig, merge } = require('@rails/webpacker')
const customConfig = {
    resolve: {
      extensions: ['.ts', '.tsx', '.vue', '.css'],
      alias: {
        '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
        '@utils': path.resolve(__dirname, '..', '..', 'app/javascript/src/utils'),
      }
    }
  }

module.exports = merge(webpackConfig, customConfig);
