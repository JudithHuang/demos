angular.module('app', [])
.controller('index', ['$scope', function($scope) {
  console.log('this is demo ctrl');

  var order = function(arr) {
    console.log(arr);

    var t = {};
    for(var i = 0; i < arr.length - 1;i ++) {

      if (arr[i].x != 1) {
        t = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = t;
      }

    }

    console.log(arr);

  };

  var arr = [
    {'x': 1},
    {'x': 6},
    {'x': 4},
    {'x': 1},
    {'x': 1},
    {'x': 3},
    {'x': 1},
    {'x': 1}
  ];

  order(arr);
}]);
