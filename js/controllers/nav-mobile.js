var navMobileController = angular.module('navMobileController', []);

navMobileController.controller('NavMobileController', ['$scope', function($scope, $location) {


    // $("#menu-toggle").click(function(e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    // });
    
    
    $("#menu-toggle").click(function() {
        // e.preventDefault();
        $("#wrapper").toggleClass("toggled");
       
    });  
    

     
    // $(".navbar-collapse").click(function() {
    //     // e.preventDefault();
    //     $('a').collapse('hide');
    // });      
    


// $(function(){ 
//      var navMain = $(".navbar-collapse");

//      navMain.on("click", "a", null, function () {
//          navMain.collapse('hide');
//      });
//  });


$("a").click(function() {
    $(this).parents('#sidebar-wrapper').hide();
});


$(".btn-default").click(function() {
    $("#sidebar-wrapper").show();
   
});




console.log('nav mobile controller works!!!');

}]);