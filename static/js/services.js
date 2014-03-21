'use strict';

/* Services */

var nodeAppServices = angular.module('nodeAppServices', ['ngResource']);

nodeAppServices.factory('Api', ['$resource',
  function ($resource) {
    return {
      Note: $resource('/getNote/:id', {id: '@_id'}, {
        'update': { method:'PUT' }
      })
    }
  }
]);