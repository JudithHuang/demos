// 23.2
// eg.1
// throw TypeError('type error...');


// 23.4
// 23.4.1
// eg.1
// var a = 12;
// console.log(eval('a + 2'));


// 23.5
// 23.5.1
// var arr = [
//    { name: 'Jane', age: 13 },
//    { name: 'Judith', age: 24 }
// ];

// console.table(arr);


// 23.5.5
// eg.1
console.profile('test profile...');
for (var i = 0; i < 100; i ++) {
  console.log('hello...');
}
console.profileEnd();
