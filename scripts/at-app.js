/*! andrew-thiele - v1.0.0 - 2016-02-13 */var AndrewApp = angular.module('AndrewApp', [
    'ngRoute', 
    'appControllers'

])


// var appControllers = angular.module('appControllers', []);

.config(['$routeProvider', function($routeProvider) {
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
    when('/work/2016', {
      templateUrl: 'views/work-2016.html',
      controller:  'WorkGalOneController',
    }).
    when('/work/2015', {
      templateUrl: 'views/work-2015.html',
      // controller:  'WorkController',
    }).
    when('/work/2014', {
      templateUrl: 'views/work-2014.html',
      // controller:  'WorkController',
    }).
    when('/work/2013', {
      templateUrl: 'views/work-2013.html',
      // controller:  'WorkController',
    }).
    otherwise({
      redirectTo: '/'
    });




    
}])


var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('About works even better!!!');

}]);
var appControllers = angular.module('appControllers', [

    'homeController',
    'aboutController',
    'statementController',
    'workController',
    'workGalOneController',
 
 
 
 
 
 
]);




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
var statementController = angular.module('statementController', []);

statementController.controller('StatementController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('Statment works even better!!!');

}]);
var workGalOneController = angular.module('workGalOneController', []);

workGalOneController.controller('WorkGalOneController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    


$('#myCarousel').carousel({
    interval: 4000
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});




//   $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/gallery/2016/slide-1.jpg',
      id: 0
    },
    {
      image: 'images/gallery/2016/slide-2.jpg',
      id: 1
    },
    {
      image: 'images/gallery/2016/slide-3.jpg',
       id: 2
        
    },
    {
      image: 'images/gallery/2016/slide-4.jpg',
      id: 3
    },
    {
      image: 'images/gallery/2016/slide-5.jpg',
      id: 4
    },
    {
      image: 'images/gallery/2016/slide-6.jpg',
      id: 5
    },
    {
      image: 'images/gallery/2016/slide-7.jpg',
      id: 6
    },
    {
      image: 'images/gallery/2016/slide-8.jpg',
      id: 7
    
        
    },
    {
      image: 'images/gallery/2016/slide-9.jpg',
      id: 8
    }
    
    
  ];




console.log('Work works even better!!!');

}]);
var workController = angular.module('workController', []);

workController.controller('WorkController', ['$scope', function($scope, $location) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');    

console.log('Work works even better!!!');

}]);