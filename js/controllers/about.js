var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    
 
 
    
   $('.mm-menu-toggle').addClass('menuTitleAbout');
   
   
// $("button").click(function(){
//   $(".mm-menu-toggle").removeClass("menuTitleHome");
//   $(".mm-menu-toggle").addClass("menuTitleAboutTrans");
// });   


// $("a").click(function(){
//   $(".testLink").removeClass("menuTitleAbout");
//   //$(".mm-menu-toggle").addClass("menuTitleAboutTrans");
// });  

$("a").click(function(){
  console.log('works')
  //$(".testLink").find(".mm-menu-toggle").removeClass("menuTitleAbout");
});


//$( "a" ).find( ".mm-menu-toggle" ).css( "color", "red" );


//     $(".mm-menu-toggle").click(function(){
//     $("menuTitleAbout").toggleClass("menuTitleAboutTrans");
// }) 
   
//     $("button").click(function(){
//     $(".mm-menu-toggle").toggleClass("menuTitleAboutTrans");
// })  
   
//    $("button").click(function(){
//     $("#mm-menu-toggle").toggleClass("fadedOut");
// })
   

$("[data-toggle=popover]")
.popover({html:true})   
 
var menu = new Menu;

 

console.log('About works even better!!!');

}]);