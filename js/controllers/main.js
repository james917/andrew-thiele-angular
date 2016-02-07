// andrew.controller('HomeController', function($scope,$location) {

// // $scope.title = "works";


// console.log('works again');

// }); //StatusController




var mainController = angular.module('mainController', []);

mainController.controller('MainController', ['$scope', function($scope) {

$scope.MyClass = 'Hello'
//   $scope.go = function(path) {
//     $location.path(path);
//   }

console.log('main controller !!!');

}]);


