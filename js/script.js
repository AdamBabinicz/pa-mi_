window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

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
  })
  .each(function() {
    $(this)
      .append('<div class="photo"></div>')
      .children(".photo")
      .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// end of script gallery
