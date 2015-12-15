var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          compact: false,
          presets: ['es2015']
        }
    }]
  },
  plugins: [
    /**
     * This plugin automatically require jquery to
     * the file when the variables `$` and `jQuery` are used.
     */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  watch: false
};
