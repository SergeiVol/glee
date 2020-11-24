$(function (){

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000
  });


  let mixer = mixitup('.products-week__items', {
      selectors: {
          control: '.products-week__button'
      }
  });

  let mixer = mixitup('.new-design__items', {
      selectors: {
          control: '.new-design__button'
      }
  });

});