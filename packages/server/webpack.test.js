const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'node',
  entry: path.resolve(__dirname, 'lib.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.tmp'),
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
}
