$(document).ready(function(){
    $(window).on('load',function(){
      $('.preloader').addClass('complete');
    });
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();  //this variable used to how many pixels top the user will store the page
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{                                 //using sticky class to reference in jquery
           $(".sticky").removeClass("stickyadd")
        }
        
    })
var typed = new Typed(".element",{

    strings:["Mageswaran","a WebDeveloper","a Graphic Designer","a SEO Engineer"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    startDelay:1000,

});
 // using fixed-top class for fixing the top when user scroll the page

 // progress bars

 var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function(){
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style","width:100%","transition:1s all");
        p[1].setAttribute("style","width:95%","transition:1.5s all");
        p[2].setAttribute("style","width:85%","transition:1.7s all");
        p[3].setAttribute("style","width:99%","transition:2s all");
        p[4].setAttribute("style","width:85%","transition:2.3s all");
        p[5].setAttribute("style","width:95%","transition:2.5s all"); 
    },
    offset:"90%"
 });

 var filterizd = $('.filter-container').filterizr({
    animationDuration :.5,
 });

 // owl carousel
 $(".owl-carousel").owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:4000,
   items:1
 });

});