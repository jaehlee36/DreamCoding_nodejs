const { log } = require('console');
const path = require('path');

console.log(__dirname); // global.__dirname
console.log(__filename); 

// 운영체제별로 c드라이브 등 경로 표시하는게 다르므로 구분해서 개발해야함


console.log();(path.sep); // 경로구분자 /
console.log(path.delimiter); // 환경변수구분자 :

console.log(path.dirname(__filename)); // 파일의 directory 경로까지 나타냄
// extension
console.log(path.extname(__filename)); // 파일의 확장자 나타냄

// parse
const parsed = path.parse(__filename); // parse된 종합 정보
// parsed.root, parsed.name 등으로 접근 가능

// string 형태로 변환
const str = path.format(parsed);
console.log(str);

console.log('isAbsolute??', path.isAbsolute(__dirname));

// normalized: 경로 이상하면 알아서 고쳐줌
console.log((path.normalize('./folder////sub')));

// join : 경로에 추가
console.log(__dirname + path.sep + 'image'); // /Users/jaeho/~~/9-path/image
console.log(path.join(__dirname, 'image'));