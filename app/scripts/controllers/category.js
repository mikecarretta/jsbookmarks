'use strict';
app.controller('CategoryCtrl', function ($scope, CategoryService) {
  /* All Category records */
  $scope.categories = CategoryService.all;
  $scope.numChars = 100;
  $scope.breakOnWord = false;
});


/* Category and Auth Services */
app.controller('CategoriesCtrl', function ($scope, CategoryService, Auth) {
  /* All Category records */
  $scope.categories = CategoryService.all;

  $scope.categoryButton = 'Add Category';
  $scope.category = {name: '', description: ''};

  $scope.user = Auth.user;

  /* Category Data Form - Submit Button action */
  $scope.submitCategory = function() {
    $scope.category.creator = $scope.user.profile.username;
    $scope.category.creatorUID = $scope.user.uid;

    CategoryService.create($scope.category).then(function() {
      /* Submit the form and clear the fields */
      $scope.category = {name: '', description: ''};
    });
  };

  /* Clears the text field values */
  $scope.resetCategory = function() {
    $scope.category = {name: '', description: ''};
  };

  $scope.editCategory = function(category) {
    $scope.edit = 'Hello';
    var cat = CategoryService.$GetRecord(category);
    $scope.category = {name: cat};

    $scope.saveCategory = function() {
      cat.$save(category);
    };
  };

  $scope.deleteCategory = function(category) {
    CategoryService.delete(category);
  };
});