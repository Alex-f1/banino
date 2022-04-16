function initProductPreviewSlider() {
  let productPreviewSlider = undefined;
  var windowWidth = $(window).width();

  if (windowWidth >= 640) {
    $.each($('.product-preview'), function (i, el) {
      var className = '.product-preview-id-' + i;
      $(el).addClass(className.replace('.', ''));
      productPreviewSlider = new Swiper(`${className} .js-product-preview-slider`, {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: className + " .swiper-button-next",
          prevEl: className + " .swiper-button-prev",
        },
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
      });
    });

  } else {
    $('.js-product-preview-slider').removeClass('swiper');
  }
}

if ($('.js-product-preview-slider').length) {
  initProductPreviewSlider();
}