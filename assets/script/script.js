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

$(function(){
    $("a[href='#header']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
    
});

// $('form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find("input").val("");
//         $('#consultation, #order').fadeOut();
//         $('.overlay, #thanks').fadeIn('slow');

//         $('form').trigger('reset');
//     });
//     return false;
// });

// $(document).ready(function(){
//     $('form').submit(function(evt){
//         evt.preventDefault();
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");


//             $('form').trigger('reset');
//         });
//         return false;
//     });

// });
