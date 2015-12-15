var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js'
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
