var contactController = angular.module('contactController', []);

contactController.controller('ContactController', ['$scope', function($scope) {

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 // $('body').removeClass('statementBody'); 
 // $('body').removeClass('workBody'); 
 $('body').addClass('aboutBody'); 



var menu = new Menu;


console.log('Contact works even better!!!');

}]);