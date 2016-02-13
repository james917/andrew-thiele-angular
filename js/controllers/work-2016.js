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