$(".col-1-of-3").on("click", function () {
  $(".col-1-of-3").toggleClass("small");
  $(this).removeClass("small").toggleClass("big");
});
