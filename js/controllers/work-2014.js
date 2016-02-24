var workTwentyFourteenController = angular.module('workTwentyFourteenController', []);

workTwentyFourteenController.controller('WorkTwentyFourteenController', ['$scope', function($scope) {

//  $('body').addClass('aboutBody');
//  $('body').removeClass('home');   

 $('body').removeClass('home'); 
 $('body').removeClass('aboutBody'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('contactBody'); 
 $('body').addClass('workBody');




 
//   $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {

          var slider2014 =   $('#2014-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:8,
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