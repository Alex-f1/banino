function initHeroSlider() {
  const swiper = new Swiper(".js-hero-slider", {
    effect: 'slide',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

initHeroSlider()