angular.module('app', [])
.controller('index', ['$scope', function($scope) {
  console.log('this is demo ctrl');
  $scope.username = 'judithhuang'
}])
.directive('judithDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'teplate.html',
    scope: {
      judithStr: '@?'
    },
    link: function(scope, elem, attr) {
      console.log('=======================this is method link');
      if (scope.judithStr) {
        console.log(scope.judithStr);
      }

      $(elem).find('.container').scroll(function() {
        console.log('==scrolling==');
      });
    }
  //   compile: function(elem, attr) {
  //     return {
  //       pre: function(scope, elem, attr, controller, transcludeFn) {
  //         console.log('==this is method compile-pre==');
  //         console.log(scope);
  //         var html = elem.children().clone();
  //         elem.append(html);
  //         console.log(elem.children());
  //       },
  //       post: function() {
  //         console.log('this is method compile-post');
  //       }
  //     }
  //   },
  //   controller: function($scope) {
  //     $scope.username = 'judith';
  //     console.log('==this is method controller==');
  //     console.log($scope);
  //   },
  //   controllerAs: 'ctrl'
  }
});
