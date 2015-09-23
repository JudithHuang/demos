angular.module('app', ['angularFileUpload'])
.controller('index', ['$scope', function($scope) {
  $scope.selectFile  = function($files) {
    console.log('select file ...');
    console.log($files);
  };

  $scope.reset = function() {
    console.log('reset ...');
  };

  console.log('this is demo ctrl');
}]);
