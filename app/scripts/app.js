'use strict';

/**
 * @ngdoc overview
 * @name angularmainForkApp
 * @description
 * # angularmainForkApp
 *
 * Main module of the application.
 */
angular
  .module('app', [

    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/richlist', {
        templateUrl: 'views/richlist.html',
        controller: 'RichListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_',window._);
