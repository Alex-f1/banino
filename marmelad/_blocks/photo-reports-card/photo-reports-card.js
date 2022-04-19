function initPhotoReportsCardSlider() {
  const photoReportsCardSlider = new Swiper(".js-photo-reports-card-slider", {
    effect: 'slide',
    loop: true,
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if ($('.js-photo-reports-card-slider').length) {
  initPhotoReportsCardSlider();
}