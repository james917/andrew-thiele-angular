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