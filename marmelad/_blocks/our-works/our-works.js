function initOurWorksSlider() {
  
  const ourWorksSlider = new Swiper(".js-our-works-slider", {
    slidesPerView: 'auto',
    spaceBetween: 13,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}

if ($('.js-our-works-slider').length) {
  initOurWorksSlider();
}