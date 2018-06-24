/*global $ , document , window */
$(document).ready(function () {
    
    // show links when click on icon
    
    "use strict";
    $('header i.head-icon').click(function () {    
        $('.nav-list').slideToggle();
    });

    // height for home
    var WinH       = $(window).height(),
        HeaderH    = $('header').innerHeight();

    $('.home').height(WinH - HeaderH - 50); 
    
     
    $(window).scroll(function () {
        
        var SCtop = $(this).scrollTop();
        if( SCtop > 1981) {
            $('.time').countTo(); // Run Count To Plugin
            $(window).off('scroll');
        }
    });
    // portfolio
    
     $('.portfolio ul li').click(function(){

        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {

            $('.shuffle-images .col-md-3').css("opacity",1);
        }
        else
        {
            $('.shuffle-images .col-md-3').css("opacity","0.1");
            $($(this).data('class')).parent().css("opacity",1);
        }
    });
    
     // owl carousel >> Team Section
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    /******* global *********/
    
    // show color option 
    
    $(".option-box .gear-check").click(function(){
        
        $('.color-option').slideToggle(1000);
        
    })
    
    // change theme color onclick
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor" , "#3a7ece").end()
    .eq(1).css("backgroundColor" , "#1f2123").end()
    .eq(2).css("backgroundColor" , "#238443").end()


    colorLi.click(function(){
        
        $("link[href*='theme']").attr("href" ,$(this).attr('data-value'));
        
    });
    
    // smooth scroll
    
    $('.nav-list li a , .home_footer').click(function (e) {
        
        e.preventDefault();
        
        $('html , body').animate({
            
            scrollTop : $('.' + $(this).data('scroll')).offset().top -35 
            
        }, 1000);
    });
    
     // add class active
    
    $('li a').click(function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // scroll to top button    
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 500) {
            $('.scroll-top').fadeIn(1000);
        } else {
            
            $('.scroll-top').fadeOut(500);
        }
    });
    
     // click on the buuton to go up
    
    $('.scroll-top').click(function () {
        
        $('html , body').animate({
            
            scrollTop : 0
            
        }, 1000);
    });        
    
     $(window).on('load' , function(){
         
         $('.loading-overlay .spinner').fadeOut(3000, function(){
             
             $(this).parent().fadeOut(3000,function(){
                 $('body').css("overflow","auto");
                 $(this).remove();
             })
             
         })
         
     })
     
     
    
});