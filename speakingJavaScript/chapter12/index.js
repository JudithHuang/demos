// 12.1
// console.log('hello, \'judith\'');

// 12.2
// var str = "hello, \n \0 judith";

// console.log(str);

// 12.3
// console.log('abc'.charAt(2));


console.log('iixxxxxiiixxxx'.replace(/i+/g, '($&)'));

function replace(elem) {
  return '(hello' + elem + ')';
}

console.log('iixxxxxiiixxxx'.replace(/i+/g, replace));
