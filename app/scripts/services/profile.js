'use strict';

app.factory('Profile', ['$window', 'FIREBASE_URL', '$firebase', 'CategoryService', '$q', function ($window, FIREBASE_URL, $firebase, CategoryService, $q) {
  var ref = new $window.Firebase(FIREBASE_URL);

  var profile = {
    get: function (userId) {
      return $firebase(ref.child('categories').child(userId)).$asObject();
    },
    getCats: function(userId) {
      var defer = $q.defer();

      $firebase(ref.child('user_categories').child(userId))
        .$asArray()
        .$loaded()
        .then(function(data) {
          var categories = {};

          for(var i = 0; i<data.length; i++) {
            var value = data[i].$value;
            categories[value] = CategoryService.get(value);
          }
          defer.resolve(categories);
        });

      return defer.promise;
    }
  };

  return profile;
}]);