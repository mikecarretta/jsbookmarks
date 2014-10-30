'use strict';

app.factory('CategoryService', ['$firebase', 'FIREBASE_URL', function ($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var categories = $firebase(ref.child('categories')).$asArray();

  var Category = {
    all: categories,
    create: function(category) {
      return categories.$add(category).then(function(catRef) {
        $firebase(ref.child('user_categories').child(category.creatorUID)).$push(catRef.name());
        return catRef;
      });
    },
    get: function(categoryId) {
      return $firebase(ref.child('categories').child(categoryId)).$asObject();
    },
    deleteCat: function(category) {
      return categories.$remove(category);
    },
    bookmarks: function (categoryId) {
      return $firebase(ref.child('bookmarks').child(categoryId)).$asArray();
    }
  };
  return Category;
}]);