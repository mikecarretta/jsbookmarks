'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth) {
  if (Auth.signedIn()) {
    $location.path('/admin');
  }

  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $location.path('/admin');
    }, function(error) {
      $scope.error = error;
      console.log(error);
    });
  };
});