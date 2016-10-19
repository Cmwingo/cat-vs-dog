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

});
