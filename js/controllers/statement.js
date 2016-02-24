var statementController = angular.module('statementController', []);

statementController.controller('StatementController', ['$scope', function($scope) {


 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('workBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('statementBody');
  

    
 // $('.mm-menu-toggle').addClass('menuTitleAbout');
   




console.log('Statment works even better!!!');

}]);