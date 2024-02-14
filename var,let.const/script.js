/**
 * var 중복 선언 및 재할당 가능
 * let 중복 선언 불가능 재할당 가능
 * const 중복 선언 및 재할당 불가능
 */

var test1 = 'hello';
console.log(test1);

var test1 = 123;
console.log(test1);

var test1 = 'hi';
console.log(test1);
// 위와같이 작성해도 문제 없이 콘솔에 잘 출력됨

// ------------------------------ var

// let test2 = 'hello';
// let test2 = 123;

// 위와 같이 같은 변수명으로 두번 선언하면 오류가 발생함
let test2 = 'hi';
console.log(test2);

test2 = 3;
console.log(test2);

// ------------------------------ let

const test3 = 'hi';
console.log(test3);
// test3 = 'aa'; 
// console.log(test3);  
// browser console 창을 확인해보면 Assignment to constant variable 에러 발생

// ------------------------------ const


// Scope
// var -> function scope
// let, const -> block level scope


function func1() {
  if(true) {
    var a = 'a';
    console.log(a);
  }
}
// console.log(a); a is not defined 가 출력됨 함수 바깥에서 콘솔을 찍었기 때문이다.


function func2() {
  if(true) {
    let letB = 'B';
  }
  // console.log(letB); // if block 바깥에는 letB가 선언 되어있지 않기 때문에, error
}
func2()


// Hoisting 
// var -> 선언 단계에서 undefined를 넣어줌
// let, const -> 선언 단계에서 undefined 할당을 해주지 않음
// 선언 단계 < ----- > 할당 단계 사이에 Temporal Dead Zone이 존재 일시적으로 변수를 사용할 수 없는 단계

console.log(hoistingVar);

var hoistingVar = 'hello';
// let hoistingVar = 'hello';
