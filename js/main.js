$(document).ready(function () { 

    // Activate Carousel 
    $("#myCarousel").carousel();  

    // Enable Carousel Indicators 
    $(".item1").click(function(){  
        $("#myCarousel").carousel(0);
    }); 

    $(".item2").click(function(){ 
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls

    $(".carousel-control-prev").click(function(){  
        $("#myCarousel").carousel("prev");
    });

    $(".carousel-control-next").click(function(){ 
        $("#myCarousel").carousel("next"); 
    }); 

}); 
