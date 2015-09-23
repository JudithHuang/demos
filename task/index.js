angular.module('app', [])
.controller('index', function() {
  console.log('index ctrl is ok');
  $(window).resize(function() {
    console.log('body is resizing');

    var mainHeight = $('.main').outerHeight();
    var indexHeight = $('.index').outerHeight();

    console.log(indexHeight - mainHeight);
  });
});
