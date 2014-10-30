'use strict';
/* global app:true */
/* exported app */

var app = angular
  .module('jsbookmarksApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://ngbookmarks.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CategoryCtrl'
      })
      .when('/category/:catId', {
        templateUrl: 'views/category.html',
        controller: 'BookmarksCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      })
      .when('/users/:userId', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/add', {
        templateUrl: 'views/addbookmark.html',
        controller: 'AddBookmarkCtrl'
      })
      // ADMIN - Add Category and Records, Edit/Delete links
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      // ADMIN - Categories Edit View
      .when('/categoryEdit/:catId', {
        templateUrl: 'views/categoryEdit.html',
        controller: 'EditCategoryCtrl'
      })
      .when('/categories/:catId', {
        templateUrl: 'views/showbookmarks.html',
        controller: 'BookmarkViewCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/addbookmark.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
/*
  firebase init
  -- repeat when changes --
  grunt build
  firebase deploy
*/