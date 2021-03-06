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
  watch: false
};
