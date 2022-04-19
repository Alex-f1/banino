function initSharesBlockSlider() {
  var sharesBlockSlider = undefined;

  var windowWidth = $(window).width();

  sharesBlockSlider = new Swiper(".shares-block .js-shares-block-slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".shares-block .swiper-button-next",
      prevEl: ".shares-block .swiper-button-prev",
    },
  });

  if (windowWidth <= 639 && sharesBlockSlider != undefined) {
    sharesBlockSlider.destroy();
    sharesBlockSlider = undefined;
    $('.js-shares-block-slider .swiper-wrapper').removeAttr('style');
    $('.js-shares-block-slider .swiper-slide').removeAttr('style');
  }

  $(window).on('load resize', function () {
    const catalogPreviewWrapper = $('.js-shares-block-wrapper');
    let containOffSetLeft = $('.contain').offset().left + 15;

    catalogPreviewWrapper.css('margin-left', containOffSetLeft);
  });
}

if ($('.js-shares-block-slider').length) {
  initSharesBlockSlider();
}