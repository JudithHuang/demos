// 16.3
// eg.1
// function foo(arg) {
//   function bar() {
//     console.log('arg:', arg);
//   }

//   bar();
// }

// foo('hello');

// eg.2
// var x = 'global';

// function f() {
//   var x = 'local';
//   console.log(x);
// }

// f();

// console.log(x);

// 16.4
// eg.1
// function main() {
//   { var foo = 4; }
//   console.log(foo);
// }

// main();

// 16.5
// eg.1
// function f() {
//   console.log(bar);
//   var bar = 'hello';
//   console.log(bar);
// }

// f();

// 16.6
// eg.1
// function func() {
//   if (true) {
//     !function() {
//       var name = 'judith';
//       console.log('ssss');
//     }();
//   }
//   console.log(name);
// }

// func();

// 16.6.2
// eg.1
// var x = 23;
// (function(twice) {
//   console.log(twice);
// })(x * 2);

// 16.8
// eg.1
// var name = 'judith';
// console.log(this.name);

// 16.8.2
// eg.1

// (function() {
//   'use strict';
//   var foo = 123;
//   console.log(window.foo);
// }());

// 16.10
// eg.1
function createInc(startValue) {
  return function(step) {
    return startValue += step;
  }
}


var inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
