/* файл для js */
$(function() {


    $('.slider__inner').slick({ /* для прокрутки */
        arrows: false,
        dots: true,
    });
    $('.works__inner').slick({ /* для прокрутки */
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<buttom class="slick-arrow slick-prev"><img src="img/slider/left.svg" alt=""></buttom>',
        nextArrow: '<buttom class="slick-arrow slick-next"><img src="img/slider/right.svg" alt=""></buttom>',
        responsive: [
            {
              breakpoint: 911,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 683,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 466,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          ]
    
    });
    /* код для мобильной адаптации кнопки с полями в шапке сайта */
    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();
    });
    
    $('.header__drop-down.drop-down').on('click', function() {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });

    

});