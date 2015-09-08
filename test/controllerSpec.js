'use strict';

describe('controllerSpec', function() {
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('test.foo'));
  beforeEach(angular.mock.module('test.common.services'));

  describe('loginController', function(){
    var scope, ctrl, authenticationService, $httpBackend;

    beforeEach(function() {
      authenticationService = {}
      angular.mock.module(function($provide) {
        $provide.value('AuthenticationService', authenticationService)
      })
    })

    beforeEach(inject(function($httpBackend, $controller, $rootScope, authenticationService) {
      this.$httpBackend = $httpBackend;
      this.scope = $rootScope.$new();
      ctrl = $controller('LoginController', {
        $scope: this.scope,
        authenticationService: authenticationService
      });
    }));

    describe("successfully logging in", function() {
      it("should redirect to /accountSession", function() {
        this.$httpBackend.expectPOST('/accountSession').respond(200);

        this.scope.login();
        this.$httpBackend.flush();

        expect(this.foo).toHaveBeenCalledWith('/accountSession');
      })
    })

  });

})