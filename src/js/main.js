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

  // Form submit
  $('.order-form').on('submit', function(e) {
    e.preventDefault();
    var url = $(this).attr('action')
    var data = $(this).serialize();

    $.ajax({
      url : url,
      type : "POST",
      data: data,
      success : function(data) {
        $('.success').addClass('active')
        setTimeout(function() {
          $('.success').removeClass('active')
          $('.page-wrapper').removeClass('show')
        }, 1300)
      } 
    });
  })

  $('.feedback-form').on('submit', function(e) {
    e.preventDefault();
    var url = $(this).attr('action')
    var data = $(this).serialize();

    $.ajax({
      url : url,
      type : "POST",
      data: data,
      success : function(data) {
        $('.success').addClass('active')
        setTimeout(function() {
          $('.success').removeClass('active')
          $('.page-wrapper').removeClass('show')
        }, 1300)
      } 
    });
  })
});
