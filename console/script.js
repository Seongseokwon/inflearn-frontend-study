console.log('안녕하세요');
console.log(123);
console.log({a: 'a', b: 'b'});

console.table({a: 'a', b: 'b'});

function errorOccured(){
  let cnt = 0
  while(cnt < 5) {
    if(cnt === 3) {
      console.error('Error Occured');
      break;
    };
    cnt++;
  }
}

errorOccured();

// 함수나 코드가 실행된 횟수를 확인 할 수 있음
// count 안의 label을 입력할 수 있음
console.count();
console.countReset();


function timeCheckFunction() {
  let i = 1;
  while(i < 50) {
    i++;
    for(let j = 0; j < i; j++ ){
      
    }
  }
}

console.time('time check')
timeCheckFunction();
console.timeLog('time check'); // -> 현재 시간을 기록
console.timeEnd('time check');

// 조건이 false인 경우에만 콘솔이 출력됨
console.assert( 1 === 2, 'error occured');

// %c 에 css code를 넣을 수 있음
console.log('This is %cmessage is %cspecial', 
`
font-style: bold;
color: white;
 background:lightblue;
  padding:5px 10px;
   border-radius:10px;
   `,
   `
    font-style: italic;
    background: white;
    padding: 5px 10px;
    border-radius:10px
   `)