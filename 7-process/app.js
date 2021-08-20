const process = require('process');

console.log(process); // global객체, interface Process에 워 많음 (openStdInput 으로 소켓 염, gid, uid 등 프로세스 관련 id)

console.log(process.execPath); // 실행되고있는 노드 위치
console.log(process.version); 
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform); // platform 정보들
console.log(process.env); // 컴터에 저장된 환경변수 정보
console.log(process.uptime()); // 얼마동안 실행되고있었는지
console.log(process.cwd()); // 현재 실행하고있는 노드의 경로
console.log(process.cpuUsage()); //

console.log('my life');


setTimeout(() => {
  console.log('setTimeout');
}, 0);

//setTimeout과 비슷
// 지금은 아닌데 현재 수행되고있는코드가 완료되면(app.js 마지막줄까지 완료) 내가 등록한 콜백을 태스크큐 맨앞에 넣어줘
// 태스크큐에 이미 다른 콜백함수가 있어도 위에있는 setTimeOut보다 먼저 수행됨
process.nextTick(() => {
  console.log('nextTick');
})
process.nextTick(() => {
  console.log('nextTick2');
})

for(let i=0; i<100; i++) {
  console.log('for loop');
}

