'use strict';

module.exports =
  angular.module('test.common.services', [])
  .service('authenticationService', require('./authenticationService'));
  //.factory('fooService', require('./fooService'));
