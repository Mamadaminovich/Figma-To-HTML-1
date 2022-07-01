$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: true,
    prevArrow:
      '<button id="prevButton"><img src="img/Forma 1 copy 8.png"></button>',
    nextArrow: '<button id="nextButton"><img src="img/Forma 1.png"></button>',
  });
});

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
