// 19.1
// 19.1.1
// eg.1
// console.log(/^(ab)$/.test('(ab)'));
// console.log(/^\(ab\)$/.test('(ab)'));
// console.log(/./.test('\n'));
// console.log(/[\s\S]/.test('\nqqqq'));
// console.log(/[\s\S]/.test(null));

// console.log(/\d/.test(0111));
// console.log(/[^0-9]/.test(0111));

// console.log(/\s/.test(' '));
// console.log(/\S/.test(' '));


// 19.1.2
// eg.1
// function parseIsoDate(str) {
//   var match = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/.exec(str);
//   if (!match) {
//     throw Error('Not ISO date', str);
//   }

//   console.log('Year:', match[0]);
//   console.log('Month:', match[1]);
//   console.log('Day:', match[2]);
// }

// parseIsoDate('2016-10-12');


// 19.1.3
// eg.1
// console.log(/^(a+)-\1$/.test('aa-aa'));


// 19.1.4
// eg.1
// console.log('<a><strong></strong></a>'.match(/^<(.*)>/)[1]);
// console.log('<a><strong></strong></a>'.match(/^<(.*?)>/)[1]);


// 19.1.5
// eg.1
// console.log(/llo\b/.test('hello'));


// 19.3
// 19.3.3
// eg.1
// var reg = /abc/gim;
// console.log(reg.ignoreCase, reg.global, reg. multiline);


// 19.4
// eg.1
// var regex = /x/g;
// var str = '_x_x';
// console.log(regex.test(str));
// console.log(regex.lastIndex);


// 19.5
// eg.1
// var str = 'aaabbb';
// console.log(str.search(/b/));
// console.log(str.search('aabbb'));


// 19.8
// eg.1
var str = 'qabacad';
function replaceA(str, index) {
  if (index % 2 === 0) {
    return 'A';
  }

  return 'B';
}
console.log(str.replace(/a/g, replaceA));
console.log(str.replace(/a/g, "[$`, $&, $', $$]"));
