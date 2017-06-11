$(document).ready(function(){
  $(".fa-times").click(function(){
    $(".sideBar").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function(){
    $(".sideBar").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });
});
