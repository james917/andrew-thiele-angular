/*! andrew-thiele - v1.0.0 - 2016-02-07 */var AndrewApp = angular.module('AndrewApp', [
    'ngRoute', 
    'appControllers'

])


// var appControllers = angular.module('appControllers', []);

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller:  'HomeController'
    }).
    when('/about', {
      templateUrl: 'views/about.html'
    }).
    when('/statement', {
      templateUrl: 'views/statement.html'
    }).
    when('/work', {
      templateUrl: 'views/work.html'
    }).
    otherwise({
      redirectTo: '/'
    });


    
}]);
var appControllers = angular.module('appControllers', [

    'mainController',
    'homeController'
 
]);




// andrew.controller('HomeController', function($scope,$location) {

// // $scope.title = "works";


// console.log('works again');

// }); //StatusController




var homeController = angular.module('homeController', []);

homeController.controller('HomeController', ['$scope', function($scope) {

// $scope.titles = {name: 'Test'}

//$scope.MyNewClass = 'Hello'

console.log('working now!!!');

}]);
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


