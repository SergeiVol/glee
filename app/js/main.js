$(function () {
  $(".filter-recent__star").rateYo({
    starWidth: "11px",
    ratedFill: "#ffcc00",
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  $(".top-slider__items").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  let mixer = mixitup(".products-week__items", {
    selectors: {
      control: ".products-week__button",
    },
  });

  let mixer2 = mixitup(".new-design__items", {
    selectors: {
      control: ".new-design__button",
    },
  });
});
