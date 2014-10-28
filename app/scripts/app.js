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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
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
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .when('/categories/:catId', {
        templateUrl: 'views/showbookmarks.html',
        controller: 'BookmarkViewCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
