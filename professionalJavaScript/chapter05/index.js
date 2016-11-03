// 5.2
// 5.2.2
// eg.1
// var arr = [1,2,3];
// console.log(arr.valueOf());


// 5.2.4
// eg.1
// var arr = new Array();
// arr.push(1, 2);
// console.log(arr);
// var elem = arr.shift();
// console.log(elem, arr);
// arr.unshift(3);
// console.log(arr);


// 5.2.5
// eg.1
// function compare(pre, next) {
//   if (pre < next) {
//     return 1;
//   } else if (pre > next) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// var arr = [0, 1, 5, 10, 15];
// console.log(arr.sort(compare));

// function func() {
//   var elem;
// }

// var obj = { name: 'judith' };

// var obj1 = obj;
// var obj2 = obj;
// obj1 = null;
// obj2 = null;


// 5.4
// 5.4.3
// eg.1
// var text = 'this has been a short summer';
// var pattern = /(.)hort/g;

// if (pattern.test(text)) {
//   console.log(RegExp.input, RegExp['$_']);
//   console.log(RegExp.leftContext);
//   console.log(RegExp.rightContext);
//   console.log(RegExp.lastMatch);
//   console.log(RegExp.lastParen);
//   console.log(RegExp.multiline);
// }


// 5.5
// eg.1
// var sum = function (num1, num2) {
//   return num1 + num2;
// };

// var func = sum;

// sum = null;

// console.log(func(10, 10));


// 5.5.3
// eg.1
// var arr = [{ name: 1 }, { name: 10 }, { name: 4 }, { name: 2 }];
// var compare = function(property) {
//   console.log('compare:', arguments);
//   return function(pre, next) {
//     console.log('locals:', arguments);
//     var value1 = pre[property]
//     var value2 = next[property]
//     if (value1 < value2) {
//       return -1;
//     } else if (value1 > value2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
// };

// console.log(arr.sort(compare('name')));


// 5.5.4
// eg.1
// function outer() {
//   inner();
// }

// function inner() {
//   console.log(inner.caller);
// }

// outer();


// 5.6
// 5.6.3
// eg.1
var str = 'hello word';
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
