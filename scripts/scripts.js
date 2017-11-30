$(function() {
    $(".navbar-inverse .navbar-nav li").on("click", function() {
      $(".navbar-inverse .navbar-nav li").removeClass("active");
      $(this).addClass("active");
    });
});