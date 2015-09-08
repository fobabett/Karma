'use strict';

module.exports = /*@ngInject*/
  function AuthenticationService($http) {
    var credentials = {};
    this.login = function(user) {
      return $http.post('/login', credentials)
      .success(function(res) {
        return res;
      });
    };

  };