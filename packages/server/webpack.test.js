const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'node',
  entry: path.resolve(__dirname, 'lib.ts'),
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname),
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
