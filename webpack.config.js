const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, { mode }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()]
})