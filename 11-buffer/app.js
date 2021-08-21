// 대충 정리함. 4.16강 다시보자
const fs = require('fs');
// createReadStream
// highWaterMark, addListner, on API, encoding
const readStream = fs.createReadStream('./file.txt', {
    highWaterMark: 8, // default: 64 kbytes
    encoding: 'utf-8',
})

readStream.on('data', (chunk) => {
    console.log(chunk);
}).on('error', error => console.log(error))

readStream.on('end')
readStream.on('error')