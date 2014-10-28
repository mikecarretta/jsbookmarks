'use strict';

app.controller('PathCtrl', function ($scope, $location, Auth) {
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
  // console.log($scope.user);

  $scope.getClass = function (path) {
    if ($location.path().substr(0, path.length) === path) {
      return true;
    } else {
      return false;
    }
  };
});