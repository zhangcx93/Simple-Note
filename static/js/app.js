'use strict';

/* App Module */

var nodeApp = angular.module('nodeApp', [
  'ngRoute',
  'ngSanitize',
  'nodeAppCtrl',
  'nodeAppUtil',
  'nodeAppServices',
  'nodeAppFilters'
]);

nodeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/note.html',
        controller: 'noteCtrl'
      }).
      // when('//:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/'
      });
  }]);