var navController = angular.module('navController', []);

navController.controller('NavController', ['$scope', function($scope, $location) {


var menu = new Menu;

//   $('body').addClass('home');
//   $('body').removeClass('aboutBody');  
//  $('body').addClass('aboutBody');
//   $('body').removeClass('home'); 



// $("[data-toggle=popover]")
// .popover({html:true});   


//  $(function(){ 
//      var navMain = $("#mainMenu");
//      navMain.on("click", "a", null, function () {
//          navMain.collapse('hide');
//      });
//  });



//  $(function(){ 
//      var navMain = $("#mm-menu");
//      navMain.on("click", "a", null, function () {
//          navMain.collapse('hide');
//      });
//  });




//$( "#test" ).removeClass(" mm-menu-open");


// $("#test").click(function(event) {
//   event.preventDefault();
//   $(this).parents('.active').remove();
// });


// $("a").click(function() {
// //   event.preventDefault();
//   $(this).parents('.mm-menu').parents('.active').remove();
// });


// $("#test").click(function() {
// //   event.preventDefault();
//   $(this).parents('.active').add();
// });


// $('a').on("click", function () {
//     $(this).parents('.mm-menu').fadeOut( "slow", "linear" );
//   // $(this).parents('.mm-menu').fadeIn();

// });


// $('a').on("click", function () {
//     $(this).parents('.hideMe').fadeOut( "slow", "linear" );
//   // $(this).parents('.mm-menu').fadeIn();
  
// });



   //mm-menu__link

// $("button").click(function() {
// //   event.preventDefault();
//   $(this).children('#mm-menu').addClass('sho');
// });


// $('button').on("click", function () {
//     $(this).child('#mm-menu').fadeIn();
//   console.log('works!');

// });

// $("a").click(function () {
//     // e.stopPropagation();
//     //$(this).children('.hideMe').addClass('show');
//     var test = $("#mm-menu-toggle");
//     console.log('works');
//      $('nav').addClass('hideMe');
//      $
// });





// $("#mm-menu-toggle").click(function () {
//     // e.stopPropagation();
//     //$(this).children('.hideMe').addClass('show');
//     console.log('works');
//      $('nav').toggleClass('hideMe');
// });

// $( "a" ).click(function() {
//   $( "nav" ).slideToggle( "slow" );
// });


// $('#mm-menu').css('display','block');




$("a").click(function() {
    $(this).parents('nav').hide();
    // $(this).parents('nav').removeAttr( 'active' );
    // $(this).parents('button').removeAttr( 'active' );
});


$("button").click(function() {
    $("nav").show();
   
});

// $('.mm-menu-toggle').addClass('menuTitleDark');

// $("button").click(function() {
//     $("menuTitleAbout").show();
// });




console.log('nav controller works!!!');

}]);