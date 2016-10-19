$(document).ready(function(){
  $("button#cat").click(function(){
    $("#catSide h3").remove();
    $("#dogSide h3").remove();
    $("#catSide h2").after("<h3>RAWR!!</h3>");
    $("#dogSide h2").after("<h3>arf arf...</h3>");
  });

  $("button#dog").click(function(){
    $("#catSide h3").remove();
    $("#dogSide h3").remove();
    $("#catSide h2").after("<h3>meow...</h3>");
    $("#dogSide h2").after("<h3>Rrrrr...WOOF WOOF!</h3>");
  });

  $(".clickable#break").click(function(){
    $(".col-md-12").children("h1").last().after("<img src=img/break.jpg alt=A cat and dog laying together>");
    $("h1#breakTime").toggle();
    $("#fight").toggle();
  });

  $(".clickable#fight").click(function(){
    $(".col-md-12 img").remove();
    $("h1#breakTime").toggle();
    $("#fight").toggle();
  });
});
