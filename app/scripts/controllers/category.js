'use strict';
app.controller('CategoryCtrl', ['$scope', 'CategoryService', function ($scope, CategoryService) {
  /* All Category records */
  $scope.categories = CategoryService.all;
  $scope.numChars = 100;
  $scope.breakOnWord = false;
}]);


/* Category and Auth Services */
app.controller('CategoriesCtrl', ['$scope', 'CategoryService', 'Auth', function ($scope, CategoryService, Auth) {
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
      $scope.alert = {
        message: 'Success!',
        type: 'success',
        show: true
      };
      $scope.category = {name: '', description: ''};
    }, function(error) {
      $scope.er = error;
      $scope.alert = {
        message: 'Error',
        type: 'danger',
        show: true
      };
    });
  };

  /* Clears the text field values */
  $scope.resetCategory = function() {
    $scope.category = {name: '', description: ''};
  };

  $scope.deleteCategory = function(category) {
    CategoryService.deleteCat(category);
  };
}]);

/* Category and Auth Services */
app.controller('EditCategoryCtrl', ['$scope', '$routeParams', '$location', 'CategoryService', function ($scope, $routeParams, $location, CategoryService) {
  //var catURL = new Firebase(FIREBASE_URL + $routeParams.catId);
  //$scope.category = $firebase(catURL).$asObject();
  $scope.category = CategoryService.get($routeParams.catId);

  $scope.save = function() {
    $scope.category.$save().then(function() {
      $location.path('/categories');
    }, function(error) {
      $scope.er = error;
      $scope.alert = {
        message: 'Error',
        type: 'danger',
        show: true
      };
    });
  };

  $scope.reset = function() {
    $scope.category = {name: '', description: ''};
  };

  $scope.cancel = function() {
    $location.path('/categories');
  };

  $scope.delete = function(category) {
    $scope.category.$remove(category).then(function() {
      console.log(category);
      $location.path('/categories');
    }, function(error) {
      $scope.er = error;
      $scope.alert = {
        message: 'Error',
        type: 'danger',
        show: true
      };
    });
  };
}]);