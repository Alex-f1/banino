function initCardProjectSlider() {
  const cardProjectSliderThumbs = new Swiper(".js-card-project-slider-thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    watchSlidesProgress: true,
  });

  const cardProjectSlider = new Swiper(".js-card-project-slider", {
    spaceBetween: 0,
    loop: true,
    thumbs: {
      swiper: cardProjectSliderThumbs,
    },
  });

}

if ($('.js-card-project-slider').length) {
  initCardProjectSlider();
}
