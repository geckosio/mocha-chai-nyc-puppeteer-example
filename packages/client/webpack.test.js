const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'lib.ts'),
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname),
    libraryExport: 'default',
    library: 'lib'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: ['istanbul']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
