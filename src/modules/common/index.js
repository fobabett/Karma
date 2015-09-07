'use strict';

module.exports =
  angular.module('test.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
