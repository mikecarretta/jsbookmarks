'use strict';

app.directive('alert', function() {
  return {
    restrict: 'AE',
    templateUrl: 'views/alert.html',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      show: '='
    }/*,
    link: function(scope) {
      scope.promise = $timeout(function(){
        scope.$apply(function() {
          $('.alert').addClass('ng-hide');
        });
      }, 5000);
    }*/
  };
});