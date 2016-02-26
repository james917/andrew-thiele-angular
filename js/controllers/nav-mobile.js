var navMobileController = angular.module('navMobileController', []);

navMobileController.controller('NavMobileController', ['$scope', function($scope, $location) {


    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });





console.log('nav mobile controller works!!!');

}]);