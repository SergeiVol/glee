$(function (){

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

 $('.catalog__item').hover(
    function() {
      $( this ).addClass('catalog__item--active');
    }, function() {
      $( this ).removeClass('catalog__item--active');
    }
  );

  let mixer = mixitup('.catalog__items');

});