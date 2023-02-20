const { webpackConfig, merge } = require('@rails/webpacker')
const customConfig = {
    resolve: {
      alias: {
        extensions: ['.ts', '.tsx', '.vue', '.css'],
        '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
        '@utils': path.resolve(__dirname, '..', '..', 'app/javascript/src/utils'),
      }
    }
  }

module.exports = merge(webpackConfig, customConfig);
