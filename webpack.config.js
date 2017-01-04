module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js'       
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js/,
        query: {
          presets: ['es2015','es2016','react','stage-0']
        }
      }
    ]
  }
}