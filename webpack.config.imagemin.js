const ImageminPlugin =require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path=require('path')

module.exports={
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
