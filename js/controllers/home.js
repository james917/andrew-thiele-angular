var homeController = angular.module('homeController', []);

homeController.controller('HomeController', ['$scope', function($scope, $location) {

  $('body').addClass('home');
   $('body').removeClass('aboutBody');  
   
   
   $('.mm-menu-toggle').addClass('menuTitleHome');
   
   $("button").click(function(){
    $("#mm-menu-toggle").toggleClass("fadedOut");
})
   
   
   
   
//   $("button").click(function(){
//   $(".mm-menu-toggle").removeClass("menuTitleHome");
//   $(".mm-menu-toggle").addClass("menuTitleHomeTrans");
// }); 

//   $("button").click(function(){
//   $(".mm-menu-toggle").removeClass("menuTitleHomeTrans");
//   $(".mm-menu-toggle").addClass("menuTitleHome");
// });

   
   
// $("#menu-toggle").hover(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });   


// $(".menu-hover").on({
//     'mouseenter': function (e) {
//         e.stopPropagation();
//                     var $lefty = $(".side-menu");
//                     $lefty.animate({
//                      left: parseInt($lefty.css('left')) < -95 ?
//                      $lefty.css('left') == 0 :
//                         -96})
//                   }
// });
// $('.menu-hover').on({
//     'mouseleave': function(){
//         var $lefty = $(".side-menu");
//             $lefty.animate({
//             left: -96
//         })
//     }
// })
var menu = new Menu;


// $('.mm-menu-toggle').onClick(function(e) {
//     e.preventDefault();
      
// });

console.log('Home works even better!!!');

}]);