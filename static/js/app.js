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
  function initCardProjectSlider() {
    var cardProjectSliderThumbs = new Swiper(".js-card-project-slider-thumbs", {
      spaceBetween: 15,
      slidesPerView: 3,
      loop: false,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000
      }
    });
    var cardProjectSlider = new Swiper(".js-card-project-slider", {
      spaceBetween: 0,
      loop: false,
      thumbs: {
        swiper: cardProjectSliderThumbs
      },
      autoplay: {
        delay: 3000
      }
    });
  }

  if ($('.js-card-project-slider').length) {
    initCardProjectSlider();
  }

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

  $('.js-choose-color').on('click', function () {
    $(this).addClass('_is-active').siblings().removeClass('_is-active');
  });
  $('.js-choose-surface').on('click', function () {
    $(this).addClass('_is-active').siblings().removeClass('_is-active');
  });
  ymaps.ready(function () {
    var mapContacts = new ymaps.Map("map_contacts", {
      center: [55.770785, 37.660368],
      zoom: 15,
      controls: []
    });
    mapContacts.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark(mapContacts.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location-icon2.svg',
      iconImageSize: [93, 93],
      iconImageOffset: [-5, -38]
    });
    mapContacts.geoObjects.add(myPlacemark);

    if (mapContacts) {
      ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
        var placemark = new Placemark([55.770785, 37.660368]);
      });
    }
  });
  $('.phone-mask').mask('+7 (000) 000-00-00');
  ymaps.ready(function () {
    var mapDelivery = new ymaps.Map("map_delivery", {
      center: [55.770785, 37.660368],
      zoom: 15,
      controls: []
    });
    mapDelivery.behaviors.disable('scrollZoom');
  });

  function initEquipmentSlider() {
    var equipmentSliderThumbs = new Swiper(".js-equipment-slider-thumbs", {
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
    var equipmentSlider = new Swiper(".js-equipment-slider", {
      spaceBetween: 30,
      loop: false,
      thumbs: {
        swiper: equipmentSliderThumbs
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }

  if ($('.js-equipment-slider').length) {
    initEquipmentSlider();
  }

  $('.js-filter-buttons').on('click', function (event) {
    event.preventDefault();
    $(this).addClass('_is-active').siblings().removeClass('_is-active');
  });

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

  function initPhotoReportsCardSlider() {
    var photoReportsCardSlider = new Swiper(".js-photo-reports-card-slider", {
      effect: 'slide',
      loop: true,
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  if ($('.js-photo-reports-card-slider').length) {
    initPhotoReportsCardSlider();
  }

  function initProductPreviewSlider() {
    var productPreviewSlider = undefined;
    var windowWidth = $(window).width();

    if (windowWidth >= 640) {
      $.each($('.product-preview'), function (i, el) {
        var className = '.product-preview-id-' + i;
        $(el).addClass(className.replace('.', ''));
        productPreviewSlider = new Swiper("".concat(className, " .js-product-preview-slider"), {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: className + " .swiper-button-next",
            prevEl: className + " .swiper-button-prev"
          },
          loop: true,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        });
      });
    } else {
      $('.js-product-preview-slider').removeClass('swiper');
    }
  }

  if ($('.js-product-preview-slider').length) {
    initProductPreviewSlider();
  }

  function initSharesBlockSlider() {
    var sharesBlockSlider = undefined;
    var windowWidth = $(window).width();
    sharesBlockSlider = new Swiper(".shares-block .js-shares-block-slider", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".shares-block .swiper-button-next",
        prevEl: ".shares-block .swiper-button-prev"
      }
    });

    if (windowWidth <= 639 && sharesBlockSlider != undefined) {
      sharesBlockSlider.destroy();
      sharesBlockSlider = undefined;
      $('.js-shares-block-slider .swiper-wrapper').removeAttr('style');
      $('.js-shares-block-slider .swiper-slide').removeAttr('style');
    }

    $(window).on('load resize', function () {
      var catalogPreviewWrapper = $('.js-shares-block-wrapper');
      var containOffSetLeft = $('.contain').offset().left + 15;
      catalogPreviewWrapper.css('margin-left', containOffSetLeft);
    });
  }

  if ($('.js-shares-block-slider').length) {
    initSharesBlockSlider();
  }

  $('.js-sorting-buttons').on('click', function (event) {
    event.preventDefault();
    $(this).addClass('_is-active').siblings().removeClass('_is-active');
  });

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