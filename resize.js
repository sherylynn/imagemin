const sharp = require("sharp");
const path = require("path");
let file_path=process.argv[2]
let new_file_path='调整后'+path.parse(file_path).base
//let new_file_path=path.parse(file_path).name+'压缩后'+path.parse(file_path).ext
//console.log(process.argv[3])
// A Promises/A+ promise is returned when callback is not provided.
/*
sharp(path.join(__dirname, 'images', 'WIN_20170929_11_01_49_Pro.jpg'))
  .min()
  .toFile('output.jpg', (err, info) => {
    console.log(info)
  })
*/

const image=sharp(file_path)

image
  .metadata()
  .then(function(metadata) {
    return image
      .resize(Math.round(metadata.width*(48/32)),Math.round(metadata.height*(48/32)))
      .toFile(new_file_path, (err, info) => {
        console.log(info);
      })
  })


