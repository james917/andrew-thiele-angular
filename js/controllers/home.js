var homeController = angular.module('homeController', []);

homeController.controller('HomeController', ['$scope', function($scope) {

  // $('body').addClass('home');
  // $('body').removeClass('aboutBody');  
  
 $('body').addClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('workBody'); 
 $('body').removeClass('contactBody'); 

  
   
   
   
 
   
   
   
  $('.mm-menu-toggle').addClass('menuTitleAbout');
  $('.mm-menu-toggle').removeClass('menuTitleHome');
 
//   $('.mm-menu-toggle').removeClass('menuTitleHome');
//   $('.mm-menu-toggle').addClass('aboutTitleHome'); 
//   $('.mm-menu-toggle').removeClass('menuTitleHome');
   
   

// $("[data-toggle=popover]")
// .popover('hide')  



console.log('Home works even better!!!');

}]);