$(document).ready(function(){
    //Show-hide
    $("#hide").click(function(){
        $(".box1").hide(1000);
    });
    $("#show").click(function(){
        $(".box1").show(1000);
    });
    $("#show-hide").click(function(){
        $(".box1").toggle(1000);
    });

    //fade
    $("#fadein").click(function(){
        $(".box2").fadeIn(1000);
    });
    $("#fadeout").click(function(){
        $(".box2").fadeOut(1000);
    });
    $("#fadeinout").click(function(){
        $(".box2").fadeToggle(1000);
    });

    //Slide
    $("#slideup").click(function(){
        $(".box3").slideUp(1000);
    });
    $("#slidedown").click(function(){
        $(".box3").slideDown(1000);
    });
    $("#slideupdown").click(function(){
        $(".box3").slideToggle(1000);
    });

    //animate
    $("#animate1").click(function(){
        $(".box4").animate({left: '800px'});
    });
    $("#animate2").click(function(){
        $(".box4").animate({left: '600px',top:'900px'});
    });
});
