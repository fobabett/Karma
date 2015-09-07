'use strict';

module.exports = /*@ngInject*/
  function authenticationService($http, $localStorage, md5, VERSION, $rootScope) {
    var apiUrl = '/api/';


    this.login = function(user) {
      return $http.post(apiUrl + '/login', {username: user.username, password: md5.createHash(user.password)})
      .success(function(res) {
        if(res.airship_access_token) {
          console.log('$localStorage.airship_access_token = res.airship_access_token;');
          return res;
        }
      });
    };

  };