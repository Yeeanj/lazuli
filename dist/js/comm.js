$(function () {
  $(".link-main").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(".link-depth1 > li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
