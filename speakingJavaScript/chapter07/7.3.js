'use strict';

console.log(eval('{ foo: 123 }'));
console.log(eval('({ foo: 123 })'));

(function() { console.log('abc'); }());
