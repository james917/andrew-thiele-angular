var statementController = angular.module('statementController', []);

statementController.controller('StatementController', ['$scope', function($scope) {


 $('body').removeClass('home');    
 $('body').addClass('aboutBody'); 

    
 $('.mm-menu-toggle').addClass('menuTitleAbout');
   




console.log('Statment works even better!!!');

}]);