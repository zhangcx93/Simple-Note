'use strict';

/* Controllers */

var nodeAppCtrl = angular.module('nodeAppCtrl', []);

nodeAppCtrl.controller('noteCtrl', ['$scope', "Api",
  function ($scope, Api) {
    var reload = function () {
      $scope.$digest();
      // $scope.notes = Api.Note.query({
      //   archieved: $scope.showArchive
      // });
    }
    $scope.showArchive = false;
    $scope.newNote = {};
    $scope.notes = Api.Note.query({
      archieved: $scope.showArchive
    });
    $scope.add = function ($event) {
      if ($event && $event.relatedTarget) {
        return;
      }
      if (!$scope.newNote.content) {
        $scope.cancel();
        return;
      }
      var newNote = new Api.Note;
      newNote.title = $scope.newNote.title;
      newNote.content = $scope.newNote.content;
      newNote.$save();
      $scope.notes.unshift(newNote);
      $scope.newNote = "";
      $scope.focus = false;
    };
    $scope.cancel = function () {
      $scope.newNote.title = "";
      $scope.newNote.content = "";
      $scope.focus = false;
    };
    $scope.archieve = function (note) {
      note.archieved = !note.archieved;
      $scope.notes.splice($scope.notes.indexOf(note), 1);
      note.$update();
    };
    $scope.edit = function ($event) {
      if ($event && $event.relatedTarget) {
        return;
      }
      var that = this;
      that.editStatus = false;
      if (that.changed == true) {
        that.note.date = new Date();
        that.note.$update();
      }
      that.changed = false;
    };
    $scope.remove = function (note) {
      note.$delete();
      $scope.notes.splice($scope.notes.indexOf(note), 1);
      // reload();
    };
    $scope.toggleArchive = function () {
      $scope.showArchive = $scope.showArchive ? false : true;
      $scope.notes = Api.Note.query({
        archieved: $scope.showArchive
      });
    };
    $scope.dateQuery = function (str) {
      var date = new Date(str);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };
  }
]);