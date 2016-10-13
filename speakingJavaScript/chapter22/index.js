// 22.2
// eg.1
var json = {
  "a": 5,
  "b": [2, 8]
};

function replacer(key, value) {
  if (typeof value === 'number') {
    return 2 * value;
  }
  return value;
}

// replacer
console.log(JSON.stringify(json, replacer));
console.log(JSON.stringify(json, ['a']));

// space
console.log(JSON.stringify(json, null, 2));
console.log(JSON.stringify(json, null, '|--'));
