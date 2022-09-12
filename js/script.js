$('.slider__row').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow:1
            }
        }
        ],
    prevArrow: '<img src="assets/img/slider/prev.png" alt="prev" class="slick-prev">',
    nextArrow: '<img src="assets/img/slider/next.png" alt="next" class="slick-next">'   
  });
