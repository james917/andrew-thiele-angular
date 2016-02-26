var contactController = angular.module('contactController', []);

contactController.controller('ContactController', ['$scope', function($scope) {

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 // $('body').removeClass('statementBody'); 
 // $('body').removeClass('workBody'); 
 $('body').addClass('aboutBody'); 



var menu = new Menu;


  $('.mm-menu-toggle').addClass('menuTitleAbout');
  $('.mm-menu-toggle').removeClass('menuTitleHome');

console.log('Contact works even better!!!');

}]);