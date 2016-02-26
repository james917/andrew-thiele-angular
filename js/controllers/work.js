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