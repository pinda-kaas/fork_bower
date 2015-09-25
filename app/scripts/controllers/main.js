'use strict';

/**
 * @ngdoc function
 * @name angularmainForkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmainForkApp
 */
angular.module('app')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    console.log('in main ctrl , calling service to proxy');


    $http.get('/cortex/').then(function (results) {
      console.log('SUCCESS', results.data);
    }, function (err) {
      console.log('ERROR', err);
    })


  });
