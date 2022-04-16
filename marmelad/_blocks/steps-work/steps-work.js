function initStepsWorkSlider() {
  var stepsWorkSlider = undefined;

  var windowWidth = $(window).width();

  if (windowWidth <= 1279) {
    stepsWorkSlider = new Swiper(".js-steps-work-slider", {
      slidesPerView: 3,
      initialSlide: 1,
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   });
  } else {
    $('.js-steps-work-slider').removeClass('swiper');

    function stepsWorkItemAnimation() {
      let index = -1;

      setInterval(function (item) {
        item.eq(index).removeClass('_is-steps-work-item');
        index = (index + 1) % item.length;
        item.eq(index).addClass('_is-steps-work-item');
      }, 3000, $('.steps-work__item'));
    }

    stepsWorkItemAnimation();
  }
  
}

if ($('.js-steps-work-slider').length) {
  
  $(window).on('load resize', function () {
    initStepsWorkSlider();
  });
}