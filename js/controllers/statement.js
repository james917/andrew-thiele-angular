var statementController = angular.module('statementController', []);

statementController.controller('StatementController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('Statment works even better!!!');

}]);