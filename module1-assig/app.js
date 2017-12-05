(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
// Comma separed items
// if <= 3 "Enjoy!" under text box
// else "Too much!" under text box
// if empty "Please enter data first" under text box

//    $scope.value;
    var msgOK = "Enjoy!";
    var msgKO = "Too much!";
    //
    $scope.doCheck = function () {

      if(!$scope.value) {

        $scope.msg = 'Please enter data first';
        return;
      }

      if ($scope.value.split(',').length<=3) {
        $scope.msg = msgOK;
      } else {
        $scope.msg = msgKO;
      }

    };

  }

})()
