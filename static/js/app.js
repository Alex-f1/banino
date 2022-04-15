'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  function initCatalogPreviewSlider() {
    var catalogPreviewSlider = undefined;
    var windowWidth = $(window).width();
    catalogPreviewSlider = new Swiper(".js-catalog-preview-slider", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    if (windowWidth <= 639 && catalogPreviewSlider != undefined) {
      catalogPreviewSlider.destroy();
      catalogPreviewSlider = undefined;
      $('.js-catalog-preview-slider .swiper-wrapper').removeAttr('style');
      $('.js-catalog-preview-slider .swiper-slide').removeAttr('style');
    }

    $(window).on('load resize', function () {
      var catalogPreviewWrapper = $('.js-catalog-preview-wrapper');
      var containOffSetLeft = $('.contain').offset().left + 15;
      catalogPreviewWrapper.css('margin-left', containOffSetLeft);
    });
  }

  if ($('.js-catalog-preview-slider').length) {
    initCatalogPreviewSlider();
  }

  $('.phone-mask').mask('+7 (000) 000-00-00');

  function initHeroSlider() {
    var heroSlider = new Swiper(".js-hero-slider", {
      effect: 'slide',
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  if ($('.js-hero-slider').length) {
    initHeroSlider();
  }

  function initOurWorksSlider() {
    var ourWorksSlider = new Swiper(".js-our-works-slider", {
      slidesPerView: 'auto',
      spaceBetween: 13,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  if ($('.js-our-works-slider').length) {
    initOurWorksSlider();
  }

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
          prevEl: ".swiper-button-prev"
        }
      });
    } else {
      var stepsWorkItemAnimation = function stepsWorkItemAnimation() {
        var index = -1;
        setInterval(function (item) {
          item.eq(index).removeClass('_is-steps-work-item');
          index = (index + 1) % item.length;
          item.eq(index).addClass('_is-steps-work-item');
        }, 3000, $('.steps-work__item'));
        console.log('+++');
      };

      $('.js-steps-work-slider').removeClass('swiper');
      stepsWorkItemAnimation();
    }
  }

  if ($('.js-steps-work-slider').length) {
    $(window).on('load resize', function () {
      initStepsWorkSlider();
    });
  }

  $('.js-button-burger').on('click', function () {
    $(this).toggleClass('_is-active');
    $('.main-menu').toggleClass('_is-show');
  });
});