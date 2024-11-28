$(function () {
  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(200);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(200);
    });

  $(".tabmenu>ul>li").click(function () {
    $(this).addClass("on").siblings().removeClass();
  });

  $(".notice li:first").click(function () {
    $(".modal").show();
  });

  $(".btn").click(function () {
    $(".modal").hide();
  });
});
