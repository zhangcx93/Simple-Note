'use strict';

/* Filters */

var nodeAppFilters = angular.module('nodeAppFilters', []);

nodeAppFilters.filter('newlines', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
})