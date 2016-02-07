var AndrewApp = angular.module('AndrewApp', [
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