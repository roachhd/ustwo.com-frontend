var webpack = require('webpack');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: './public/js',
    filename: 'app.wp.js',
    // pathinfo: true
  },
  debug: true,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors.js')
  ],
  resolve: {
      // alias: {
      //   "iso-call/polyfill": "babel-core/polyfill",
      //   request: 'browser-request'
     // }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        optional: ['runtime', 'es7.classProperties'],
        cacheDirectory: 'public',
        stage: 0
      }
    }]
  }
};
