var random = angular.module('random', []);

random.controller('RandomController', ['$scope', function($scope){


  $scope.data = [0,0,0,0,0,0];

  $scope.start = function() {
    //randomService = new RandomService();
    $scope.data = [10,214,34,43,43,76];
  };

}]);
