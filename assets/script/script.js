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

// function toggleButtonColor(el) {
//     el.style.backgroundColor = el.style.backgroundColor == 'white' ? 'red' : 'white';
//   }
  
//   document.getElementById('button').onclick = function() {
//     toggleButtonColor(document.querySelector('.slider'));
//   }


var buttonchange = document.querySelector(".change");
var body = document.querySelector(".body");
var section = document.querySelector(".section");
var hi = document.querySelector(".hi");
var headerlink1 = document.querySelector(".link1");
var headerlink2 = document.querySelector(".link2");
var headerlink3 = document.querySelector(".link3");
var headerlink4 = document.querySelector(".link4");
var headerlink5 = document.querySelector(".link5");
var headerlink6 = document.querySelector(".link6");
var subtitle = document.querySelector(".subtitle");
var abouttitle = document.querySelector(".about-title-dark");
var line2 = document.querySelector(".line2");
var aboutrightdark = document.querySelector(".about-right-dark");
var aboutp1 = document.querySelector(".about-right-darkp1");
var aboutp2 = document.querySelector(".about-right-darkp2");
var aboutp3 = document.querySelector(".about-right-darkp3");
var addresstitle = document.querySelector(".addres-title");
var addresstitle2 = document.querySelector(".addres-title2");
var servicesection = document.querySelector(".serivecedark");
var servicetitle = document.querySelector(".service-dark");
var serviceblock = document.querySelector(".service-block");
var serviceblock2 = document.querySelector(".service-block2");
var serviceblock3 = document.querySelector(".service-block3");
var serviceblock4 = document.querySelector(".service-block4");
var serviceblock5 = document.querySelector(".service-block5");
var serviceblock6 = document.querySelector(".service-block6");
var portfolio = document.querySelector(".porfolio");
var testimonials = document.querySelector(".testimonials");
var footer = document.querySelector(".footer-dark");
var achiv = document.querySelector(".achiev");
var buttonchanged = document.querySelector(".change1");




buttonchange.addEventListener("click", function(){
    body.classList.add("body1");
    buttonchanged.classList.add("change1-show");
    buttonchange.classList.add("change-none");
    section.classList.add("section-light");
    hi.classList.add("hi1");
    headerlink1.classList.add("header-links-light");
    headerlink2.classList.add("header-links-light");
    headerlink3.classList.add("header-links-light");
    headerlink4.classList.add("header-links-light");
    headerlink5.classList.add("header-links-light");
    headerlink6.classList.add("header-links-light");
    subtitle.classList.add("subtitle1");
    abouttitle.classList.add("about-title-light");
    aboutrightdark.classList.add("about-right-light");
    aboutp1.classList.add("about-right-p-light");
    aboutp2.classList.add("about-right-p-light");
    aboutp3.classList.add("about-right-p-light");
    addresstitle.classList.add("addres-title-light");
    addresstitle2.classList.add("addres-title-light");
    line2.classList.add("line2-light");
    servicetitle.classList.add("about-title-light");
    serviceblock.classList.add("service-block-light");
    serviceblock2.classList.add("service-block-light");
    serviceblock3.classList.add("service-block-light");
    serviceblock4.classList.add("service-block-light");
    serviceblock5.classList.add("service-block-light");
    serviceblock6.classList.add("service-block-light");
    portfolio.classList.add("porfolio-light");
    testimonials.classList.add("testimonials-light");
    servicesection.classList.add("service-section-light");
    footer.classList.add("footer-light");
    achiv.classList.add("achiv-light");
});



buttonchanged.addEventListener("click", function(){
    body.classList.remove("body1");
    buttonchanged.classList.remove("change1-show");
    buttonchange.classList.remove("change-none");
    section.classList.remove("section-light");
    hi.classList.remove("hi1");
    headerlink1.classList.remove("header-links-light");
    headerlink2.classList.remove("header-links-light");
    headerlink3.classList.remove("header-links-light");
    headerlink4.classList.remove("header-links-light");
    headerlink5.classList.remove("header-links-light");
    headerlink6.classList.remove("header-links-light");
    subtitle.classList.remove("subtitle1");
    abouttitle.classList.remove("about-title-light");
    aboutrightdark.classList.remove("about-right-light");
    aboutp1.classList.remove("about-right-p-light");
    aboutp2.classList.remove("about-right-p-light");
    aboutp3.classList.remove("about-right-p-light");
    line2.classList.remove("line2-light");
    addresstitle.classList.remove("addres-title-light");
    addresstitle2.classList.remove("addres-title-light");
    servicetitle.classList.remove("about-title-light");
    serviceblock.classList.remove("service-block-light");
    serviceblock2.classList.remove("service-block-light");
    serviceblock3.classList.remove("service-block-light");
    serviceblock4.classList.remove("service-block-light");
    serviceblock5.classList.remove("service-block-light");
    serviceblock6.classList.remove("service-block-light");
    portfolio.classList.remove("porfolio-light");
    servicesection.classList.remove("service-section-light");
    testimonials.classList.remove("testimonials-light");
    footer.classList.remove("footer-light");
    achiv.classList.remove("achiv-light");
});

serviceblock.addEventListener('mouseenter', function () {
    serviceblock.classList.add('service-block-light-hover');
});

serviceblock.addEventListener('mouseleave', function () {
    serviceblock.classList.remove('service-block-light-hover');
});

const s = window.screen;
const w = (q.width = s.width);
const h = (q.height = s.height);
const ctx = q.getContext("2d");

const p = Array(Math.floor(w / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "0123456789ABCDEF".split("");

setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f0";
    p.map((v, i) => {
        ctx.fillText(random(hex), i * 10, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
}, 1000 / 30);

