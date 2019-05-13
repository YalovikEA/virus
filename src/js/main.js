$(document).ready(function() {
  svg4everybody({});

  // Slider
  $('.features__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000
  });

  // Menu
  $('.nav-toggle').on('click', function() {
    $('.page-wrapper').toggleClass('open');
  });

  // Modal
  $('.features__action-btn').on('click', function() {
    $('.page-wrapper').addClass('show')
  })
  $('.overlay').on('click', function() {
    $('.page-wrapper').removeClass('show')
  })
  $('.modal__close').on('click', function() {
    $('.page-wrapper').removeClass('show')
  })
});
