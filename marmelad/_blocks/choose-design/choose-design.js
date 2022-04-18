$('.js-choose-color').on('click', function() {
  $(this)
    .addClass('_is-active')
    .siblings()
    .removeClass('_is-active');
});

$('.js-choose-surface').on('click', function() {
  $(this)
    .addClass('_is-active')
    .siblings()
    .removeClass('_is-active');
});