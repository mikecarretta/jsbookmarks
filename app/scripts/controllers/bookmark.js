'use strict';

app.controller('BookmarksCtrl', ['$scope', '$routeParams', 'CategoryService', function($scope, $routeParams, CategoryService) {
  $scope.category = CategoryService.get($routeParams.catId);
  $scope.bookmarks = CategoryService.bookmarks($routeParams.catId);

  $scope.numChars = 80;
  $scope.breakOnWord = false;
}]);

app.controller('BookmarkViewCtrl', [ '$scope', '$routeParams', 'CategoryService', 'Auth', function($scope, $routeParams, CategoryService, Auth) {
  $scope.category = CategoryService.get($routeParams.catId);
  $scope.bookmarks = CategoryService.bookmarks($routeParams.catId);

  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;
}]);

app.controller('AddBookmarkCtrl', ['$scope', '$location', 'CategoryService', 'Auth',  function($scope, $location, CategoryService, Auth) {
  $scope.allCategories = CategoryService.all;
  $scope.selectedCategory = $scope.allCategories[0];
  $scope.user = Auth.user;

  $scope.update = function(calId) {
    $scope.bookmarks = CategoryService.bookmarks(calId);
  };

  $scope.addBookmark = function () {
    var bookmark = {
      name: $scope.name,
      url: $scope.url,
      description: $scope.description,
      creator: $scope.user.profile.username,
      creatorUID: $scope.user.uid
    };
    $scope.bookmarks.$add(bookmark);

    $scope.name = '';
    $scope.description = '';
    $scope.url = '';
  };

  $scope.cancel = function() {
    $location.path('/admin');
  };
}]);