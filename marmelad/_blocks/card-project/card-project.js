function initCardProjectSlider() {
  const cardProjectSliderThumbs = new Swiper(".js-card-project-slider-thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: false,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
    },
  });

  const cardProjectSlider = new Swiper(".js-card-project-slider", {
    spaceBetween: 0,
    loop: false,
    thumbs: {
      swiper: cardProjectSliderThumbs,
    },
    autoplay: {
      delay: 3000,
    },
  });

}

if ($('.js-card-project-slider').length) {
  initCardProjectSlider();
}
