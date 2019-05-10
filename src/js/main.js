$(document).ready(function() {
  svg4everybody({});

  // Slider
  $('.features__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: true,
    speed: 1000,
    // centerPadding: '10vw',
    // responsive: [{
    //   breakpoint: 600,
    //   settings: {
    //     centerMode: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerPadding: '15vw'
    //   }
    // }]
  });
});
