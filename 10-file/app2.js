const fs = require('fs').promises; // fs 모듈 안에있는  primise들

// utf8 쓰는이유는 받아온 data가 버퍼이기 때문
fs.readFile('./file.txt')
.then(data => console.log(data))
.catch(console.error);

// writeFile ctrl클릭해보면 promise를 반환하지는 않아서 then() 안해도된다
fs.writeFile('./file.txt', 'Hello, Jaeho!')
.catch(console.error);

// 아랫줄에 추가
fs.appendFile('./file.txt', 'Hello, Jaeho2!')
.catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt')
.catch(console.error);

// 순서대로 작성했어도 모든것이 primise이므로 순서가 보장되지않으므로
//  순서대로 원하면 위에처럼 하지말고 then 안에 작성해야한다

// folder
// fs.mkdir('sub-folder')
// .catch(console.error);