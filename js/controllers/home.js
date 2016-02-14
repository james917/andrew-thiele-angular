var homeController = angular.module('homeController', []);

homeController.controller('HomeController', ['$scope', function($scope, $location) {

  $('body').addClass('home');
   $('body').removeClass('aboutBody');  
   
   
   $('.mm-menu-toggle').addClass('menuTitleHome');
    $('.mm-menu-toggle').removeClass('menuTitleAbout');
   
// $("button").click(function(){
//   $(".mm-menu-toggle").removeClass("menuTitleAbout");
//   $(".mm-menu-toggle").addClass("menuTitleHome");
// });   
   
   
//   $("button").click(function(){
//     $("#mm-menu-toggle").toggleClass("fadedOut");
// })
   
   
 
var menu = new Menu;



console.log('Home works even better!!!');

}]);