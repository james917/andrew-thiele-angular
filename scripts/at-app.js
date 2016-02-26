/*! andrew-thiele - v1.0.0 - 2016-02-26 */var AndrewApp = angular.module('AndrewApp', [
    'ngRoute', 
    'ngAnimate',
    'appControllers'

])


// var appControllers = angular.module('appControllers', []);

.config(['$routeProvider', function($routeProvider,$httpProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller:  'HomeController',
    }).
    when('/about', {
      templateUrl: 'views/about.html',
      controller:  'AboutController',
    }).
    when('/statement', {
      templateUrl: 'views/statement.html',
      controller:  'StatementController',
    }).
    when('/work', {
      templateUrl: 'views/work.html',
      controller:  'WorkController',
    }).
    when('/work/2015', {
      templateUrl: 'views/work/work-2015.html',
      controller:  'WorkTwentyFifteenController',
    }).
    when('/work/2014', {
      templateUrl: 'views/work/work-2014.html',
      controller:  'WorkTwentyFourteenController',
    }).
    when('/work/2013', {
      templateUrl: 'views/work/work-2013.html',
      controller:  'WorkTwentyThirteenController',
    }).
    when('/contact', {
      templateUrl: 'views/contact.html',
      controller:  'ContactController',
    }).
    otherwise({
      redirectTo: '/'
    });




    
}])


var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope) {




 // $('body').removeClass('home');    
 // $('body').addClass('aboutBody'); 
 
 
 $('body').removeClass('home'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('workBody'); 
 $('body').removeClass('contactBody'); 
$('body').addClass('aboutBody');
 
 
 

    
 // $('.mm-menu-toggle').addClass('menuTitleAbout');
  // $('.mm-menu-toggle').addClass('test');
  
// $(".mm-menu-toggle").click(function() {
//    $('.mm-menu-toggle').removeClass('menuTitleDark');
//    $('.mm-menu-toggle').addClass('menuTitleLight');
   
// });
  
  
 
 
   
   


// $("[data-toggle=popover]")
// .popover({html:true});   
 


 

console.log('About works even better!!!');

}]);
var contactController = angular.module('contactController', []);

contactController.controller('ContactController', ['$scope', function($scope) {

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 // $('body').removeClass('statementBody'); 
 // $('body').removeClass('workBody'); 
 $('body').addClass('aboutBody'); 



var menu = new Menu;


  $('.mm-menu-toggle').addClass('menuTitleAbout');
  $('.mm-menu-toggle').removeClass('menuTitleHome');

console.log('Contact works even better!!!');

}]);
var appControllers = angular.module('appControllers', [

    'homeController',
    'navController',
    'navMobileController',
    'aboutController',
    'statementController',
    'contactController',
    'workController',
    'workTwentyFifteenController',
    'workTwentyFourteenController',
    'workTwentyThirteenController',
    //'workGalOneController',
 
 
 
 
 
 
]);




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
var navMobileController = angular.module('navMobileController', []);

navMobileController.controller('NavMobileController', ['$scope', function($scope, $location) {


    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });





console.log('nav mobile controller works!!!');

}]);
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
var statementController = angular.module('statementController', []);

statementController.controller('StatementController', ['$scope', function($scope) {


 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('workBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('statementBody');
  

    
 // $('.mm-menu-toggle').addClass('menuTitleAbout');
   




console.log('Statment works even better!!!');

}]);
var workTwentyThirteenController = angular.module('workTwentyThirteenController', []);

workTwentyThirteenController.controller('WorkTwentyThirteenController', ['$scope', function($scope) {

//  $('body').addClass('aboutBody');
//  $('body').removeClass('home'); 

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody');


// $(".mm-menu-toggle").click(function() {
//   $('.mm-menu-toggle').removeClass('menuTitleDark');
//   $('.mm-menu-toggle').addClass('menuTitleLight');
   
// });

//   $('.mm-menu-toggle').addClass('menuTitleAbout');
//   $('.mm-menu-toggle').removeClass('menuTitleHome');
 
//   $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {
// 			$("#content-slider").lightSlider({
//                 loop:true,
//                 keyPress:true
//             });
         var slider2013 =   $('#2013-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:7,
                slideMargin: 0,
                adaptiveHeight: false,
                vThumbWidth: 100,
                speed:1000,
                auto:false,
                loop:true,
                onSliderLoad: function() {
                    $('#2013-gallery').removeClass('cS-hidden');
                }  
            });

          $('#goToPrevSlide2013').click(function(){
                slider2013.goToPrevSlide(); 
            });
          
          $('#goToNextSlide2013').click(function(){
                slider2013.goToNextSlide(); 
            });            
            
            
            
            
		});






console.log('Work works even better!!!');

}]);
var workTwentyFourteenController = angular.module('workTwentyFourteenController', []);

workTwentyFourteenController.controller('WorkTwentyFourteenController', ['$scope', function($scope) {

//  $('body').addClass('aboutBody');
//  $('body').removeClass('home');   

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody');


// $(".mm-menu-toggle").click(function() {
//   $('.mm-menu-toggle').removeClass('menuTitleDark');
//   $('.mm-menu-toggle').addClass('menuTitleLight');
   
// });

//   $('.mm-menu-toggle').addClass('menuTitleAbout');
//   $('.mm-menu-toggle').removeClass('menuTitleHome');
 
//   $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {

          var slider2014 =   $('#2014-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:12,
                slideMargin: 0,
                adaptiveHeight: false,
                speed:1000,
                auto:false,
                loop:true,
                onSliderLoad: function() {
                    $('#2014-gallery').removeClass('cS-hidden');
                }  
            });
        
            $('#goToPrevSlide2014').click(function(){
                slider2014.goToPrevSlide(); 
            });
          
          $('#goToNextSlide2014').click(function(){
                slider2014.goToNextSlide(); 
            });     
            
		});





console.log('Work works even better!!!');

}]);
var workTwentyFifteenController = angular.module('workTwentyFifteenController', []);

workTwentyFifteenController.controller('WorkTwentyFifteenController', ['$scope', function($scope) {

 // $('body').addClass('aboutBody');
 // $('body').removeClass('home');   
 
 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody');

 
//  $(".mm-menu-toggle").click(function() {
//   $('.mm-menu-toggle').removeClass('menuTitleDark');
//   $('.mm-menu-toggle').addClass('menuTitleLight');
   
// });
//   $('.mm-menu-toggle').addClass('menuTitleAbout');
//   $('.mm-menu-toggle').removeClass('menuTitleHome');
 
  // $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {

          var slider2015 =   $('#2015-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:15,
                slideMargin: 0,
                adaptiveHeight: false,
                speed:1000,
                auto:false,
                loop:true,
                onSliderLoad: function() {
                    $('#2015-gallery').removeClass('cS-hidden');
                }  
            });
            
          $('#goToPrevSlide2015').click(function(){
                slider2015.goToPrevSlide(); 
            });
          
          $('#goToNextSlide2015').click(function(){
                slider2015.goToNextSlide(); 
            });              
            
		});




console.log('Work works even better!!!');

}]);
var workController = angular.module('workController', []);

workController.controller('WorkController', ['$scope', function($scope) {

 // $('body').addClass('aboutBody');
 // $('body').removeClass('home'); 
 
 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody'); 

//  $(".mm-menu-toggle").click(function() {
//    $('.mm-menu-toggle').removeClass('menuTitleDark');
//    $('.mm-menu-toggle').addClass('menuTitleLight');
   
// });
 
 // $('.mm-menu-toggle').addClass('menuTitleAbout');
 // $('.mm-menu-toggle').removeClass('menuTitleHome');
 
  // $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {

          var slider =   $('#main-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:1000,
                auto:false,
                loop:true,
                onSliderLoad: function() {
                    $('#main-gallery').removeClass('cS-hidden');
                }  
            });
                   $('#goToPrevSlide').click(function(){
                slider.goToPrevSlide(); 
            });
          
          $('#goToNextSlide').click(function(){
                slider.goToNextSlide(); 
            });   
            
            
		});




console.log('Work works even better!!!');

}]);