const sharp = require("sharp");
const path = require("path");
let file_path=process.argv[2]
let new_file_path='压缩后'+path.parse(file_path).base
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

sharp(file_path)
  .min()
  .toFile(new_file_path, (err, info) => {
    console.log(info);
  })

