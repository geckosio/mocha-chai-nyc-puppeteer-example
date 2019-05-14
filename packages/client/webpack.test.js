const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'lib.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    library: 'lib',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
}
