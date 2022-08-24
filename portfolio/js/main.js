$(document).ready(function(){
    $('.nav__list, .btn__link').on("click", "a", function(event){
        event.preventDefault();
        var clas = $(this).attr('href'),
            top = $(clas).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    $('.header__burger').click(function(event){
        $('.header__burger, .nav__list').toggleClass('active');
    });
    const Texts = [
            'HTML', 'CSS', 'JAVASCRIPT',
            'Github', 'MONGOOSE', 'REACT',
            'Redux', 'SCSS',
            'BEM', 'NODEJS', 'MONGODB',
            'EXPRESS', 'ES5/ES6', 'JQUERY', 'JAVA',
            'Python', 'Angular'
        ];
        var tagCloud = TagCloud('.sphere', Texts, {
            radius: 270,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        });

        // Giving color to each text in sphere
        var color = '#bc6ff1 ';
        document.querySelector('.sphere').style.color = color;

    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Web Developer", "Kazakh"],
        typeSpeed:150,
        BackSpeed:80,
        loop: true
    });   

    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");  
    document.body.classList.toggle("sun")
    });
    window.addEventListener("load", () =>{
        if(document.body.classList.contains("sun")){
            dayNight.querySelector("i").classList.add("fa-moon");
        }
        else{
            dayNight.querySelector("i").classList.add("fa-sun");
        }
    });
});

$(function(){
$(window).scroll(function(){
    $('.about__text').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__fadeInLeftBig")
        }
    });
});
$(window).scroll(function(){
    $('.about__info').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__fadeInRightBig")
        }
    });
});
$(window).scroll(function(){
    $('.about__text').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__fadeInLeftBig")
        }
    });
});
$(window).scroll(function(){
    $('.skill__cards').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__fadeInUpBig")
        }
    });
});
$(window).scroll(function(){
    $('.road').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__zoomInDown")
        }
    });
});
$(window).scroll(function(){
    $('.services__row contact__row').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__slideInUp")
        }
    });
});
$(window).scroll(function(){
    $('.contact__row').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if(imagePos < topOfWindow+700){
            $(this).addClass("animate__slideInUp")
        }
    });
});
});