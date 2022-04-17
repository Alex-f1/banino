$('.js-sorting-buttons').on('click', function (event) {
  event.preventDefault();

  $(this)
    .addClass('_is-active')
    .siblings()
    .removeClass('_is-active')
});