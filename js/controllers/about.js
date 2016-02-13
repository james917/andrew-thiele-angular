var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('About works even better!!!');

}]);