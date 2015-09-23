angular.module('app', [])
.controller('index', ['$scope', '$filter',
  function($scope, $filter) {
    console.log('this is demo ctrl');
    $scope.test = [{
      name: '1gg',
      age: '2'
    }, {
      name: '21',
      age: '2'
    }, {
      name: 'www',
      age: '12'
    }];

    var result = $filter('filter')($scope.test, {name: '1', age: '2'}, function(actual, expected) {
      console.log('actual=====' + actual);
      console.log('expected====' + expected);
      return true;
    });

    console.log(result);
  }
]);
