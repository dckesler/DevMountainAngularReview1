/*CONTROLLER*/
/*CONTROLLER*/
angular.module("app").controller("controller", function($scope, service) {

  $scope.push = function(input) {
    service.receive(input);
  };

  $scope.pull = function() {
    $scope.pulled = service.send();
  }

})
