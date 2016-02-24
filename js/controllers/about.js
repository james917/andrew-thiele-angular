var aboutController = angular.module('aboutController', []);

aboutController.controller('AboutController', ['$scope', function($scope) {




 // $('body').removeClass('home');    
 // $('body').addClass('aboutBody'); 
 
 
 $('body').removeClass('home'); 
 $('body').removeClass('statementBody'); 
 $('body').removeClass('workBody'); 
 $('body').removeClass('contactBody'); 
$('body').addClass('aboutBody');
 
 
 

    
 //$('.mm-menu-toggle').addClass('menuTitleAbout');
   
   


// $("[data-toggle=popover]")
// .popover({html:true});   
 


 

console.log('About works even better!!!');

}]);