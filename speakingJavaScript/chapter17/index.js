// 17.1

// 17.1.2
// eg.1
// var jane = {
//   name: 'Jane',
//   describe: function() {
//     return 'Person named:' + this.name;
//   },
// };

// console.log(jane.describe());

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


// 17.3.5
// eg.1
// var obj = {
//   name: 'Jane',
//   friends: ['Tarzan', 'Cheeta'],
//   loop: function() {
//     'use strict';
//     this.friends.forEach(function(friend) {
//       console.log(this.name + ' konws ' + friend);
//     }.bind(this));
//   }
// };

// obj.loop();


// 17.4
// eg.1
// es6: [[Prototype]] => Object.setPrototypeOf(obj, proto);
// refer: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
// var proto = {
//   describe: function() {
//     return 'name:' + this.name;
//   }
// };

// var obj = {
//   name: 'Judith'
// };

// Object.setPrototypeOf(obj, proto);

// console.log(obj.describe());


// 17.4.2
// eg.1
// var proto = {
//   describe: function() {
//     return 'name:' + this.name;
//   }
// };

// var obj = {
//   name: 'Judith',
//   describe: function() {
//     return 'overwrite';
//   }
// };

// Object.setPrototypeOf(obj, proto);

// console.log(obj.describe());


// 17.4.3
// eg.1
// var PersonProto = {
//   describe: function() {
//     return 'Person named:' + this.name;
//   }
// };

// var jane = {
//   name: "Jane"
// };

// var tarzan = {
//   name: 'Tarzan'
// };

// Object.setPrototypeOf(jane, PersonProto);
// Object.setPrototypeOf(tarzan, PersonProto);

// console.log(jane.describe());
// console.log(tarzan.describe());


// 17.4.4
// eg.1
// var PersonProto = {
//   describe: function() {
//     return 'Person named:' + this.name;
//   }
// };

// var jane = Object.create(PersonProto, {
//   name: { value: 'Jane', writable: true }
// });

// console.log(jane.describe());
// console.log(Object.getPrototypeOf(jane) === PersonProto);

// console.log(jane.hasOwnProperty('describe'));
// console.log(jane.__proto__.hasOwnProperty('describe'));

// eg.2
// var A = {};
// var B = Object.create(A);
// var C = Object.create(B);

// console.log(A.isPrototypeOf(C));
// console.log(C.isPrototypeOf(A));


// 17.4.5
// eg.1
// var PersonProto = {
//   describe: function() {
//     return 'Person named:' + this.name;
//   }
// };

// var jane = {
//   name: 'Jane'
// };

// jane.__proto__ = PersonProto;

// console.log(jane.describe());


// 17.4.6
// eg.1
// var proto = { foo: 'a' };

// var jane = Object.create(proto);

// jane.foo = 'b';

// console.log(jane.foo, jane.__proto__.foo);

// delete jane.foo;
// console.log(jane.foo);
// delete jane.__proto__.foo;
// console.log(jane.foo);


// 17.5
// 17.5.1
// eg.1
// var PersonProto = {
//   describe: function() {
//     return 'Person named:' + this.name;
//   }
// };

// var jane = {
//   name: 'Jane'
// };

// Object.setPrototypeOf(jane, PersonProto);
// console.log(Object.getOwnPropertyNames(jane));
// console.log(Object.keys(jane));

// 17.5.2
// eg.1
// var PersonProto = {
//   describe: function() {
//     return 'Person named:' + this.name;
//   }
// };

// var jane = {
//   name: 'Jane'
// };

// Object.setPrototypeOf(jane, PersonProto);

// for (var property in jane) {
//   console.log(property);
// }

// console.log(jane.__proto__.hasOwnProperty('describe'));
// console.log(jane.__proto__.hasOwnProperty('name'));


// 17.7
// 17.7.1
// eg.1
// var obj = {
//   get foo() {
//     return 'getter';
//   },

//   set foo(value) {
//     console.log('setter:', value);
//   }
// };

// console.log(obj.foo);
// obj.foo = 'bla';


// 17.10
// eg.1
function Person(name) {
  this.name = name;
}

Person.prototype.describe = function() {
  return 'Person named:' + this.name;
}

var jane = new Person('Jane');
console.log(jane.describe());


// 17.10.1
// eg.1
