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

  initCatalogPreviewSlider();

  function initHeroSlider() {
    var swiper = new Swiper(".js-hero-slider", {
      effect: 'slide',
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  initHeroSlider();
  $('.js-button-burger').on('click', function () {
    $(this).toggleClass('_is-active');
    $('.main-menu').toggleClass('_is-show');
  });
});