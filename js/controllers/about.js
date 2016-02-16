var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope) {




 $('body').removeClass('home');    
 $('body').addClass('aboutBody'); 

    
 $('.mm-menu-toggle').addClass('menuTitleAbout');
   
   


// $("[data-toggle=popover]")
// .popover({html:true});   
 


 

console.log('About works even better!!!');

}]);