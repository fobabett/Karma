'use strict';

module.exports = /*@ngInject*/
  function MyController($scope, $localStorage, $state) {
    var self = this;

    self.firstName = '';
    self.lastName = '';

    self.getFullName = function() {
      return self.firstName + '' + self.lastName;
    };

    return self;
  };