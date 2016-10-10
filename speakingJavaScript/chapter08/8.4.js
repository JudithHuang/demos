// console.log(new Boolean('false').valueOf());

// console.log(2 + '3');

// ==== 8.5.3 ====

var n = { valueOf: function() { return 123; }, toString: function() { return '7'; } };
console.log(Number(n));
console.log(String(n));
