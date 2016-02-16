var workController = angular.module('workController', []);

workController.controller('WorkController', ['$scope', function($scope) {

 $('body').addClass('aboutBody');
 $('body').removeClass('home');   
 
  $('.mm-menu-toggle').addClass('menuTitleAbout');
 
  	 $(document).ready(function() {
			$("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                adaptiveHeight: false,
                speed:1000,
                auto:false,
                loop:true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }  
            });
		});



        // $('#adaptive').lightSlider({
        //     adaptiveHeight:true,
        //     item:1,
        //     slideMargin:0,
        //     loop:true,
        //     onSliderLoad: function() {
        //         $('#adaptive').removeClass('cS-hidden');
        //     } 
        // });



console.log('Work works even better!!!');

}]);