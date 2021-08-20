const fs = require('fs');

// 3가지 형태로 API 제공됨
// rename(... , callback(error,data))         비동기
// try { renameSync(...) } catch(e) {}        동기, 가급적 사용 X
// primises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', 'text-new.txt'); 
} catch (error) {
  console.error(error);
}

// 3번째 인자는 콜백함수이며, 콜백의 인자는 에러이다. 에러 혹은 null값
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});

console.log('1');
fs.promises.rename('./text.txt', 'text-new.txt').then(console.log('Done!')).catch(error => console.error(error))

// console.error 로 해도 됨. js문법
console.log('2');