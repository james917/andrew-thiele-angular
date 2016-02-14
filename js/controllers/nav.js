var navController = angular.module('navController', []);

navController.controller('NavController', ['$scope', function($scope, $location) {


var menu = new Menu;

  $('body').addClass('home');
   $('body').removeClass('aboutBody');  
//  $('body').addClass('aboutBody');
//   $('body').removeClass('home'); 



$("[data-toggle=popover]")
.popover({html:true});   




console.log('nav controller works!!!');

}]);