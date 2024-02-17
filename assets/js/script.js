//Funcion que cambia color con scroll//

$(document).ready(function () {
    var navBar = $('#menu');

    $(window).scroll(function () {
        console.log($(this).scrollTop()); // Agrega esta línea para verificar el valor de scrollTop

        if ($(this).scrollTop() > 500) {
            navBar.removeClass('navbar-light');
            navBar.addClass('bg-interno navbar-dark');
        } else {
            navBar.removeClass('bg-interno navbar-dark');
            navBar.addClass('navbar-light');
        }
    });
});

  $(document).ready(function () {
    // Selecciona todos los enlaces de la barra de navegación que tienen un href que comienza con #
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      // Obtiene el atributo href del enlace
      var target = this.hash;
      var $target = $(target);

      // Desplaza la página hacia el objetivo con animación
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });


