function initCatalogPreviewSlider() {
  var catalogPreviewSlider = undefined;

  var windowWidth = $(window).width();

  catalogPreviewSlider = new Swiper(".js-catalog-preview-slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if (windowWidth <= 639 && catalogPreviewSlider != undefined) {
    catalogPreviewSlider.destroy();
    catalogPreviewSlider = undefined;
    $('.js-catalog-preview-slider .swiper-wrapper').removeAttr('style');
    $('.js-catalog-preview-slider .swiper-slide').removeAttr('style');
  }

  $(window).on('load resize', function () {
    const catalogPreviewWrapper = $('.js-catalog-preview-wrapper');
    let containOffSetLeft = $('.contain').offset().left + 15;

    catalogPreviewWrapper.css('margin-left', containOffSetLeft);
  });
}

if ($('.js-catalog-preview-slider').length) {
  initCatalogPreviewSlider();
}