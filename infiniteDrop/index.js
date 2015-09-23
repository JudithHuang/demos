angular.module('app', [])
.controller('index', ['$scope', function($scope) {
  console.log('this is demo ctrl');
  $scope.data = [
    {
      "id": 1,
      "name": "judit1"
    },
    {
      "id": 2,
      "name": "judit2"
    }
  ];

  $scope.data.concat([{"id": 3, "name": "judith3"}]);

  $scope.loadData = function() {
    $.get('data1.json', {}, function(data) {
      $scope.data.concat(data.items);
    });
  };

  $scope.loadData();

}])
.directive('infiniteDrop', function() {
  return {
    restrict: 'E',
    template: '<div class="infinite-wraper">\
                <div class="infinite-content">\
                  this is demo\
                  <div ng-transclude></div>\
                </div>\
              </div>',
    transclude: true,
    scope: {
      loadData: '&loadData'
    },
    link: function(scope, elem, attr) {
      $('.infinite-wraper').scroll(function() {
        console.log('scrolling');

        var wraperHeight = $('.infinite-wraper').height();
        var contentHeight = $('.infinite-content').outerHeight();
        var scrollHeight = $('.infinite-wraper').scrollTop();

        if (contentHeight - wraperHeight - scrollHeight <= 0) {
          console.log('this is bottom');
          scope.loadData();
        }

      });

    }
  }
});
