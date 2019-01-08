const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, { mode }) => ({
  devtool: mode === 'production' ? 'hidden-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.png$/,
        include: path.resolve(__dirname, 'src'),
        use: 'file-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()]
})