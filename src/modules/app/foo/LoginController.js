'use strict';

module.exports = /*@ngInject*/
  function LoginController($scope, AuthenticationService, $state, $rootScope) {

    $scope.login = function (user) {
      AuthenticationService.login(user)
      .success(function(res) {
        $state.go('accountSession');
      })
      .error(function(res) {
        return res;
      });
    };
  };