// Write your JavaScript here...

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// slick slider for In The News section
$(document).ready(function () {
  $(".news-slider").slick({
    nextArrow: ".arrow_next",
    prevArrow: ".arrow_prev",
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500,
        settings: "unslick",
      },
    ],
  });
});

// video modal event listeners

$(document).ready(function () {
  $(".vid-play").click(function () {
    $("#vid-modal").fadeIn(500).modal("show");
  });
});

$("#vid-modal").on("hidden.bs.modal", function (e) {
  $("#vid-modal video").attr("src", $("#vid-modal  video").attr("src"));
});

$(document).ready(function () {
  $("#vid-1").click(function () {
    $("#vid-1").addClass("active-v");
  });
});

$(document).ready(function () {
  $(".modal-close").click(function () {
    $("#vid-1").removeClass("active-v");
  });
});

// shop by device slider
$(document).ready(function () {
  $(".room-device").slick({
    nextArrow: ".arrow-n-shop",
    prevArrow: ".arrow-p-shop",
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinity: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinity: true,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinity: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinity: true,
        },
      },
      {
        breakpoint: 449,
        // setting the settings property
        // to ‘unslick’ to destroy the slideshow
        settings: "unslick",
        // arrows: false,
      },
    ],
  });
});
