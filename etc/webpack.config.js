var webpack = require('webpack');

module.exports = {
  entry: {
    vendors: ['babelify/polyfill',
             'react',
             'svg4everybody',
             'classnames',
             'ellipsize',
             'es6-promise',
             'moment',
             'react-transition-manager',
             'scrollmagic'],
    app: './src/app/index.js'
  },
  output: {
    path: './public/js',
    filename: 'app.wp.js',
  },
  // debug: true,
  // devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({path: './public/js',
                                             name: 'vendors',
                                             filename: 'vendors.wp.js',
                                             minChunks: Infinity}),
    new webpack.optimize.UglifyJsPlugin({sourceMap: false,
                                         warnings: false})
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
