$(document).ready(function() {
  $('.new_img_wrap').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1024: { items: 1 }
    }
  });

  $('.popular_contents').owlCarousel({
    margin: 24,
    loop: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 2.8 }
    }
  });

  $('.brand_box').owlCarousel({
    margin: 40,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoWidth: false,
    autoHeight: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 6 }
    }
  });
});