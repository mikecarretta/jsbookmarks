'use strict';

app.controller('AuthCtrl', [ '$scope', '$location', 'Auth', function ($scope, $location, Auth) {
  if (Auth.signedIn()) {
    $location.path('/categories');
  }

  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $scope.alert = {
        message: 'Success',
        type: 'success',
        show: true
      };
      $location.path('/categories');
    }, function(error) {
      $scope.er = error.code;
      $scope.mes = error.message;
      $scope.alert = {
        message: 'Error',
        type: 'danger',
        show: true
      };
      console.log(error);
    });
  };
}]);