'use strict';

app.controller('ProfileCtrl', ['$scope', '$routeParams', 'Profile', function ($scope, $routeParams, Profile) {
  var uid = $routeParams.userId;

  $scope.profile = Profile.get(uid);
  Profile.getCats(uid).then(function(categories) {
    $scope.categories = categories;
  });
}]);