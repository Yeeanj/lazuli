// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


$(function () {
  const deplink1 = $(".link-depth1");
  const linkBtn = $(".link-main");
  linkBtn.on("click", function () {
    deplink1.addClass("active");
  });
});
