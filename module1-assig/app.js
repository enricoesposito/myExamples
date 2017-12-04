(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('checkCtrl', checkCtrl);

  checkCtrl.$injection = ['$scope'];
  function checkCtrl($scope) {

    $scope.value;
    $scope.msgOK;
    $scope.msgKO;
  }

})()
