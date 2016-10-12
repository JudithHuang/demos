// 18.1
// 18.1.1
// eg.1
// var arr = [];

// arr[0] = 1;
// arr[2] = 2;

// console.log(arr);


// 18.4
// 18.4.2
// eg.1
// var a1 = [1, 2, 3];
// var a2 = a1;

// a1.length = 0;
// console.log(a1, a2);

// a1 = [];
// console.log(a1, a2);


// 18.5
// eg.1
// var arr = [1, , , 3];
// console.log(arr.length);


// 18.5.2
// eg.1
// var arr1 = [1, , 3];
// var arr2 = [1, undefined, 3];
// console.log(1 in arr1);
// console.log(1 in arr2);


//  18.8
// eg.1
// var arr = [1, 2, 3, 4];
// console.log(arr.splice(1, 2, 'a', 'b', 'c'));
// console.log(arr);


// 18.9
// 18.9.1
// eg.1
// var arr = [3, 2, 1, 8];

// function sortNum(pre, next) {
//   if (pre < next) {
//     return 1;
//   } else if (pre === next) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// arr.sort(sortNum);
// console.log(arr);


// 18.12
// 18.12.1
// eg.1
// function isEven(num) {
//   return num % 2 === 0;
// }

// var a1 = [1, 2, 3, 4];
// console.log(a1.every(isEven));
// console.log(a1.some(isEven));


// 18.12.3
// eg.1
// function add(pre, cur) {
//   console.log(pre, cur);
//   return pre + cur;
// }

// console.log([10, 3, -1].reduceRight(add));


// 18.14
// eg.1
var obj = {
  name: 'Judith',
  getName: function() {
    console.log(this.name);
  }
};

for (var key in obj) {
  console.log(key);
}
