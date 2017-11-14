const ImageminPlugin =require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const imageminJpegRecompress = require('imagemin-jpeg-recompress')
const imageminJpegoptim = require('imagemin-jpegoptim')
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
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 4
      },
      plugins: [
        imageminJpegRecompress({
          accurate: true,//高精度模式
          quality: 'high',//图像质量:low, medium, high and veryhigh;
          method: 'smallfry',//网格优化:mpe, ssim, ms-ssim and smallfry;
          min: 70,//最低质量
          loops: 0,//循环尝试次数, 默认为6;
          progressive: false,//基线优化
          subsample: 'default'//子采样:default, disable;
        }),
        //这个插件就是压缩图片大小的了
        imageminJpegoptim({
          size:'50%'
        })
      ]
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.json']
  }
}
