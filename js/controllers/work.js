var workController = angular.module('workController', []);

workController.controller('WorkController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('Work works even better!!!');

}]);