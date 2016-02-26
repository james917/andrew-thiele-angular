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