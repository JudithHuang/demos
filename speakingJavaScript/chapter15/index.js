// 15.4

// foo();

// function foo() {
//   console.log('hello');
// };

// 15.5

// var foo = function () {
//   console.log('hello');
// };
// console.log(foo.name);

// 15.8
// 15.8.1
// 'use strict';
// function sloppyFunc(param) {
//   param = 'changed';
//   return arguments[0];
// }

// console.log(sloppyFunc('www'));

// 15.8.4
// var names = ['judith'];
// function sayName(names) {
//   names[0] = 'judith 2';
// }

// sayName(names);

// console.log(names);

// 15.9
// 15.9.1
function selectEntried(start, end) {
  console.log('start:', start);
  console.log('\nend:', end);
}

selectEntried(end=10, start=1);
