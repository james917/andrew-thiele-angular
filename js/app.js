var AndrewApp = angular.module('AndrewApp', [
    'ngRoute', 
    'appControllers'

])


// var appControllers = angular.module('appControllers', []);

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller:  'HomeController',
    }).
    when('/about', {
      templateUrl: 'views/about.html',
      controller:  'AboutController',
    }).
    when('/statement', {
      templateUrl: 'views/statement.html',
      controller:  'StatementController',
    }).
    when('/work', {
      templateUrl: 'views/work.html',
      controller:  'WorkController',
    }).
    when('/work/2016', {
      templateUrl: 'views/work-2016.html',
      controller:  'WorkGalOneController',
    }).
    when('/work/2015', {
      templateUrl: 'views/work-2015.html',
      // controller:  'WorkController',
    }).
    when('/work/2014', {
      templateUrl: 'views/work-2014.html',
      // controller:  'WorkController',
    }).
    when('/work/2013', {
      templateUrl: 'views/work-2013.html',
      // controller:  'WorkController',
    }).
    otherwise({
      redirectTo: '/'
    });




    
}])

