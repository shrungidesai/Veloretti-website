//img slider
$(document).ready(function () {
  $(".img-slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='images/Button - Previous.png'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='images/Button - Next.png'>",
  });
});

//drop-down menu
$(document).ready(function () {
  $(document).on("click", ".dropbtn", function () {
    $(".dropbtn").next().removeClass("show");
    $(this).next().toggleClass("show");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".dropbtn").length)
      $(".dropbtn").next().removeClass("show");
  });
});

//full width slider
$(document).ready(function () {
  $(".full-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  $(".prev-btn").click(function () {
    $(".full-slider").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".full-slider").slick("slickNext");
  });
});

// single-product -> bike display slider
$(document).ready(function () {
  $(".display-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  $(".prev-btn").click(function () {
    $(".display-slider").slick("slickPrev");
  });
});

//alert on get-in-touch request-btn
$(document).ready(function () {
  $(".request-btn").on("click", function () {
    alert("Request Sent");
  });
});

//customise-btn -> confirmation
$(document).ready(function () {
  $(".customise-btn").on("click", function () {
    confirm("Can we start customising?");
  });
});

//alert on download-btn
$(document).ready(function () {
  $(".download-btn").on("click", function () {
    alert("Downloading Started");
  });
});

// page scroll
$(document).ready(function () {
  $(".scroll-btn").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  // header shadow on specific pos
  $(window).scroll(function () {
    $(".header-css").toggleClass("shadow", $(this).scrollTop() > 490);
  });

  // hide scroll-btn when webpage reach on top
  $(window).scroll(function () {
    if ($(this).scrollTop() <= 95) {
      $(".scroll-btn").fadeOut(1000);
    }
  });

  // show scroll-btn when webpage reach on specific pos
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 880) {
      $(".scroll-btn").fadeIn(1000);
    }
  });

  // click on plus, show paragraph and change img
  $(document).on("click", ".plus", function () {
    $(this).closest(".question").next(".answer").toggle();
    $(this).find(".changed").toggle();
    $(this).find(".origin-img").toggle();
  });
});

$(document).ready(function () {
  $(".user").click(function () {
    $(".user_detail").toggle();
  });
});

//loader
$(document).ready(function () {
  $(".logo").fadeIn();
  $(".logo").animate(
    {
      marginTop: "-=280",
    },
    400
  );

  $(".loading").fadeIn();
  $(".loading").animate(
    {
      marginTop: "-=180",
    },
    1400
  );
});

// hide overlay after
$(document).ready(function () {
  $(".welcome").fadeIn(3800);
  setTimeout(function () {
    $(".overlay").fadeOut(3000);
  }, 2600);
});
