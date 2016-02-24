var workTwentyFifteenController = angular.module('workTwentyFifteenController', []);

workTwentyFifteenController.controller('WorkTwentyFifteenController', ['$scope', function($scope) {

 // $('body').addClass('aboutBody');
 // $('body').removeClass('home');   
 
 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody');

 
 
 
  // $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {

          var slider2015 =   $('#2015-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:10,
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