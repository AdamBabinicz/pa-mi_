window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

//    magnific popup
// $(document).ready(function() {
//   $(".parent-container").magnificPopup({
//     delegate: "a", // child items selector, by clicking on it popup will open
//     type: "image",
//     mainClass: "mfp-container",
//     gallery: {
//       enabled: true
//     }
//     // other options
//   });
// });

// script gallery

$(".tile")
  .on("mouseover", function() {
    $(this)
      .children(".photo")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function() {
    $(this)
      .children(".photo")
      .css({ transform: "scale(1)" });
  })
  .on("mousemove", function(e) {
    $(this)
      .children(".photo")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });

$(window).on("orientationchange resize load", function(event) {
  if ($(window).width() > $(window).height()) {
    $(".tile").each(function() {
      $(this)
        .append('<div class="photo"></div>')
        .children(".photo")
        .css({
          "background-image":
            "url(" + $(this).attr("data-image-landscape") + ")"
        });
      // .remove("tile");
    });
  }
  if ($(window).width() < $(window).height()) {
    $(".tile").each(function() {
      $(this)
        .append('<div class="photo"></div>')
        .children(".photo")
        .css({
          "background-image": "url(" + $(this).attr("data-image-portrait") + ")"
        });
      // .remove("tile");
    });
  }
});

var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// end of script gallery

// zwijany div
function op(obj) {
  x = document.getElementById(obj);
  if (x.style.display == "none") x.style.display = "block";
  else x.style.display = "none";
}
// end zwijany div

// scrolreveal

// Listen for orientation changes

// $(window).on("orientationchange", function(event) {
//   $("body")
//     .removeData("data-image-portrait")
//     .removeData("data-image-landscape")
//     .addClass(event.orientation);
// });

// $(document).ready(function(e) {
//   if ($(window).width() > $(window).height())
//     $("body").addData("data-image-landscape");
//   else $("body").addData("data-image-portrait");
// });
