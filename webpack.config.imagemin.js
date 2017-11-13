import ImageminPlugin from 'imagemin-webpack-plugin'
const CopyWebpackPlugin = require('copy-webpack-plugin')
import path from 'path'

export default {
  //cache: true,
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },
  target: 'node',
  plugins: [
    new CopyWebpackPlugin([
      // 打包出release
      {
        from: path.join(__dirname, 'images'),
        to: path.resolve(__dirname, 'imagemin'),
        toType: 'dir'
      }
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  resolve: {
    extensions: ['*', '.js', '.json']
  }
}
