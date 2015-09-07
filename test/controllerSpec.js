'use strict';

describe('MyController', function () {

  beforeEach(angular.mock.module('test.foo'));

  describe('getFullName()', function() {
    it('should handle names correctly', inject(function($controller) {
      var myController = $controller('MyController');

      myController.firstName = 'Te';
      myController.lastName = 'Vallee';

      myController.getFullName().should.equal('Te Vallee');
    }));
  });
});