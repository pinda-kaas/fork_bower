'use strict';

/**
 * @ngdoc function
 * @name angularmainForkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmainForkApp
 */
angular.module('app')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
