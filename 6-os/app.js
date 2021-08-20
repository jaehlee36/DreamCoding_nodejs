const os = require('os');

console.log(os.EOL === '\r\n'); //window에서 줄바꿈
console.log(os);
console.log(os.totalmem()); // 총메모리
console.log(os.freemem()); //  사용가능 메모리
console.log(os.type()); // 운영체제 타입(윈도우: darwin) 
console.log(os.userInfo()); // 사용자정보