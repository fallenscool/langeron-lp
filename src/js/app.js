window.onload = function() {
  $("#heroSlider .slider__wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    prevArrow: $("#heroSlider .slider__arrow-prev"),
    nextArrow: $("#heroSlider .slider__arrow-next"),
    useTransform: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
  });

  $("#gallerySlider .slider__wrap").slick({
    draggable: false,
    // arrows: false,
    variableWidth: true,
    prevArrow: $("#gallerySlider .slider__arrow-prev"),
    nextArrow: $("#gallerySlider .slider__arrow-next"),
    useTransform: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  });

  $("#appartsSlider .slider__wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    draggable: false,
    // variableWidth: true,
    prevArrow: $("#appartsSlider .slider__arrow-prev"),
    nextArrow: $("#appartsSlider .slider__arrow-next"),
    useTransform: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)"
  });
  open();
};

const open = () => {
  const btn = document.querySelector(".nav__btn");
  const block = document.querySelector(".nav");
  btn &&
    btn.addEventListener("click", function() {
      btn.classList.toggle("open");
      block.classList.toggle("open");
    });
};
