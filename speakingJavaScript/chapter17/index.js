// 17.1

// 17.1.2
// eg.1
// var jane = {
//   name: 'Jane',
//   decribe: function() {
//     return 'Person named:' + this.name;
//   },
// };

// console.log(jane.decribe());

// 17.1.3
// eg.1
// var obj = { hello: 'world' };

// eg.2
// var obj = {};

// Object.defineProperty(obj, 'canBeDeleted', {
//   value: 123,
//   configurable: true
// });

// Object.defineProperty(obj, 'cannotBeDeleted', {
//   value: 456,
//   configurable: false
// });


// delete obj.canBeDeleted
// delete obj.cannotBeDeleted

// console.log(obj);


// 17.1.4
// eg.1
// var obj = { 'not an identifier': 123 };
// console.log(obj['not an identifier']);

//eg.2
// var obj = { someProperty: 1 };
// console.log(obj['some' + 'Property']);

// eg.3
// var obj = { someFunc: function() { console.log('function...'); } };
// obj['someFunc']();


// 17.2
// eg.1
// console.log(Object(null));
// console.log(Object(true));


// 17.3
// eg.1
// function func() {
//   console.log(this);
// }

// var obj = { method: func };
// console.log(obj.method());


// 17.3.1
// eg.1
// var jane = {
//   name: 'Jane',
//   sayHelloTo: function(otherName) {
//     'use strict';
//     console.log(this.name + ' say hello to ' + otherName);
//   }
// };

// jane.sayHelloTo('Judith');

// var func = jane.sayHelloTo;
// func.call(jane, 'Judith');

// var func = jane.sayHelloTo;
// func.apply(jane, ['Judith']);


// 17.3.2
// eg.1
// function func() {
//   console.log('this:', this);
//   console.log('arguments:', Array.prototype.slice.call(arguments));
// }

// var bound = func.bind('abc', 1, 2);

// bound(3);


// 17.3.3
// eg.1
// console.log(...[1,2,3]);

// eg.2
// console.log(Math.max(...[4, 1, 10]));
// console.log(Math.max.apply(null, [4, 1, 10]));
