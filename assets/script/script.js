$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        
    });
    $('.slider-portfolio-class').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: '<button type="button" class="slick-prev1">Web</button>',
        nextArrow: '<button type="button" class="slick-next1 flash wow"data-wow-duration="1s" data-wow-delay="10s" data-wow-offset="10" data-wow-iteration="50">Design</button>',
        fade: true,
        cssEase: 'linear',
        
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
    
});

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});



