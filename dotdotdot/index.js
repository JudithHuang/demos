app = angular.module('app', [])
.controller('IndexCtrl', ['$scope',
  function($scope) {
    $scope.test = 'hello';
    var dd3 = 'hello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihaohello, nihao';
    $('#d3').html(dd3);
    $('#d3').dotdotdot({
      ellipsis  : '...',
      height: 100,
      callback  : function( isTruncated, orgContent ) {
        console.log('=====isTruncated======' + isTruncated);
      },
    });
    // $("#d4").dotdotdot({
    //   after:"a.more"
    // });

    console.log('ctrl is ok');
    console.log(navigator.userAgent);
    if (navigator.userAgent.indexOf('Firefox') >= 0) {
      console.log('===firefox===');
    }
  }])
.factory('myInterceptor', ['$log', function($log) {
  $log.debug('MyInterceptor is ok');
  var myInterceptor = {};
  return myInterceptor;
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('myInterceptor');
}])
.directive('onFinishRenderData', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      console.log('render data is ok');
      // $('#d3').dotdotdot();
    }
  };
});
