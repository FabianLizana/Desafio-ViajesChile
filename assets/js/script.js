$(document).ready(function () {
  var navBar = $('#menu');

  // Cambia el color de la barra de navegación con el desplazamiento
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          navBar.removeClass('navbar-light').addClass('bg-interno navbar-dark');
      } else {
          navBar.removeClass('bg-interno navbar-dark').addClass('navbar-light');
      }
  });

  // Desplazamiento suave al hacer clic en enlaces de la barra de navegación
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});



