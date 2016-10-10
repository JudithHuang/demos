'use strict';

var str = 'abc';

console.log(str.length);
console.log(str.toUpperCase());

console.log('==========================');

console.log('object equal', { x: 1 } === { x: 1 });

console.log('=============undefined and null================');

// function f(x) {
//   return x;
// }

// console.log(f());

console.log(NaN, !NaN);

console.log('typeof null:', typeof null);

console.log('null instanceof object:', null instanceof Object);

console.log('NaN && "abc":', NaN && 'abc');
console.log('123 && "abc":', 123 && 'abc');

console.log('1 === 1.0:', 1 === 1.0);

console.log('to number:', +new Date());

// function f() {
//   if (arguments.length !== 2) {
//     throw new Error('Need excetly 2 arguments');
//   }

//   return arguments;
// }

// var args = f(1, 2, 3 , 4);

// console.log('args:', args);


var reseult = [];

for (var i=0; i < 5; i ++) {
  reseult.push(function() { return i });
}

console.log(reseult[1]());

//=========== object ===========

// var Person = {
//   name: 'judith',
//   describe: function() {
//     return 'name is ' + this.name;
//   }
// };

// console.log('object:', Person.name);
// console.log('object:', Person.describe());
// console.log('property in object:', 'name' in Person, 'age' in Person);

// var func = Person.describe;
// console.log(func());


// =========== 1.14.5: facotry ===========

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.dist = function() {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// };

// var point = new Point(3, 5);

// console.log(point.x);
// console.log(point.dist());


// ========== 1.5: Array ==========

// var arr = [1, 2, 3, 4];

// console.log(5 in arr);


// ========== 1.6: Regex ==========

console.log(/^a+b+$/.test('aaab'));
