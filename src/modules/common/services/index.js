'use strict';

module.exports =
  angular.module('test.common.services', [])
  .service('AuthenticationService', require('./AuthenticationService'));
  //.factory('fooService', require('./fooService'));
