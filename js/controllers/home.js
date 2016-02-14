var homeController = angular.module('homeController', []);

homeController.controller('HomeController', ['$scope', function($scope, $location) {

  $('body').addClass('home');
  $('body').removeClass('aboutBody');  
   
   
   
 
   
   
   
  $('.mm-menu-toggle').addClass('menuTitleHome');
  $('.mm-menu-toggle').removeClass('menuTitleAbout');
   

// $("[data-toggle=popover]")
// .popover('hide')  



console.log('Home works even better!!!');

}]);