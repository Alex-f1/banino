function initHeroSlider() {
  const heroSlider = new Swiper(".js-hero-slider", {
    effect: 'slide',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if ($('.js-hero-slider').length) {
  initHeroSlider();
}