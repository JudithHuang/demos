angular.module('app', [])
.controller('index', ['$scope', function($scope) {
  console.log('this is index ctrl');
  $scope.user = {};

  $scope.$watch('$scope.user.username', function (newValue) {
    console.log('==name==' + newValue);
  });

  $scope.send = function() {
    console.log('this is send form msg');
  };

  var randomAlphanumeric = function(length) {
    var chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789';
    var randomChars = '';

    for (i = 0;i < length; i++) {
      var index = Math.floor(Math.random() * chars.length);
      randomChars += chars.charAt(index);
    }

    return randomChars;
  };

  console.log(randomAlphanumeric(8));

}]);
