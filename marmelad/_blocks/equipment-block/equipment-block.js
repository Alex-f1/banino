function initEquipmentSlider() {
  const equipmentSliderThumbs = new Swiper(".js-equipment-slider-thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: false,
    watchSlidesProgress: true,
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  });

  const equipmentSlider = new Swiper(".js-equipment-slider", {
    spaceBetween: 30,
    loop: false,
    thumbs: {
      swiper: equipmentSliderThumbs,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

if ($('.js-equipment-slider').length) {
  initEquipmentSlider();
}
