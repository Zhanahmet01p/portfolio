$(document).ready(function(){
    $('.nav__list').on("click", "a", function(event){
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
            'EXPRESS', 'ES5/ES6', 'JQUERY', 'JAVA'
        ];
        var tagCloud = TagCloud('.sphere', Texts, {
            radius: 290,
            maxSpeed: 'normal',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        });

        // Giving color to each text in sphere
        var color = '#bc6ff1 ';
        document.querySelector('.sphere').style.color = color;
});