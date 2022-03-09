$(document).ready(function () {
  $(".subscribe-btn").on("click",function () {
    $("#popup").addClass("active"); 
  });
  $(".close").on("click",function () {
    $("#popup").removeClass("active"); 
  });
});