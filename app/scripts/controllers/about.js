'use strict';

/**
 * @ngdoc function
 * @name angularmainForkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularmainForkApp
 */
angular.module('angularmainForkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
