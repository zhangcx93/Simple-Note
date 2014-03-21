'use strict';

/* Utilities */

var nodeAppUtil = angular.module('nodeAppUtil', []);

nodeAppUtil.directive('ngEnter', function () {
  return function ($scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if (event.which === 13) {
        $scope.$apply(function () {
          $scope.$eval(attrs.ngEnter, {
            'event': event
          });
        });
        event.preventDefault();
      }
    });
  };
});

nodeAppUtil.directive('ngFocusme', function ($timeout, $document) {
  return {
    link: function (scope, element, attr) {
      scope.$watch(attr.ngFocusme, function (status) {
        if (status) {
          $timeout(function () {
            if (element[0].className.indexOf(status) != -1) {
              element[0].focus();
              element.triggerHandler('keyup');
            }
          })
        }
      }, true);
    }
  };
});

nodeAppUtil.directive('ngAutoExpand', function () {
  return {
    restrict: 'A',
    link: function ($scope, elem, attrs) {
      var resize = function () {
        elem[0].style.height = 0;
        var height = elem[0].scrollHeight;

        elem[0].style.height = height + 28 + "px";
        elem[0].style.marginBottom = "-14px";
      };
      elem.bind('keyup focus blur', function (event) {
        resize();
      });

      // Expand the textarea as soon as it is added to the DOM
      setTimeout(function () {
        resize();
      }, 0)
    }
  };
});