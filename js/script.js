$(document).ready(function () {
  // Hide collapsible navbar on click
  $(".navbar-nav li a").on("click", function () {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Smooth scrolling
  $(".nav-item a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Scroll Up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $(".scroll-up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  // Sticky menu
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 600) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Home slider
  $(".home-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Story video
  $(".story-video-play").venobox();

  // Works filter
  var mixer = mixitup(".works-filter");

  // Testimonial slider
  $(".testimonial-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Get the current year for the copyright
  $("#year").text(new Date().getFullYear());

});
