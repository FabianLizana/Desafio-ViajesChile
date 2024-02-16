//Funcion que cambia color con scroll

$(window).scroll(function(){

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
       $('#menu').addClass("bg-interno");
      } else {

       $("#menu").removeClass("bg-interno");
       $('#menu').addClass("navbar");
      }

   });

//    $(window).scroll(function(){
//     var $menu = $("#menu");
//     var scrollValue = $(this).scrollTop();

//     $menu.toggleClass("navbar", scrollValue <= 400);
//     $menu.toggleClass("bg-interno", scrollValue > 400);
// });


