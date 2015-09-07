'use strict';

module.exports = 
  angular.module('test.foo', [

  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('login', {
      url: '',
      templateUrl: 'app/foo/layout.html',
      controller: 'MyController'
    });
  })
  .controller('MyController', require('./MyController'));
