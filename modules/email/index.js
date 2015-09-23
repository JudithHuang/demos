angular.module('app', [])
.controller('index', ['$scope', function($scope) {
  console.log('this is demo ctrl');
  $scope.test = 'sss';
}])
.directive('oaEmail', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      ngModel: '='
    },
    link: function(scope, element, attrs, ngModel) {
      var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;

      // 监听change事件来开启绑定
      element.on('blur keyup change', function() {
        console.log(ngModel.$viewValue);
        if (EMAIL_REGEXP.test(ngModel.$viewValue)) {
          console.log('===ok===');
        } else {
          console.log('===error===');
        }

      });
    }

  }
});
