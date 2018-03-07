/* Calculadora */
window .onload = init;

// Función iniciadora
function init () {
  calculadora .inicio();
}

/* Objeto Implicito */
var calculadora = {
  // Obtiene todos los elementos que representan las teclas disponibles
  teclas : null,
  accion : null,
  inicio : function() {
    // Obtenemos todos los los elementos que representan cada botón de la calculadora
    calculadora .teclas = document .querySelectorAll( '#calculadora #teclado ul li' );

    //console.log( calculadora .teclas );

    // Recorre cada uno de los elementos
    calculadora .teclas .forEach( ( tecla ) => {
      // Crea un evento por cada elemento
      tecla .addEventListener( 'click', calculadora .presionar );
    });

  },
  presionar: function( event ) {
    // Obtiene el atributo del elemento que lanzó el evento
    calculadora .accion = event .target .getAttribute( 'class' );
    calculadora .ejecutar( calculadora .accion );
  },
  ejecutar: function( accion ) {
    console .log( accion );

    if( accion == 'numero' ) {

    }
    if( accion == 'signo' ) {

    }
    if( accion == 'decimal' ) {

    }
    if( accion == 'igual' ) {

    }
    if( accion == 'borrar' ) {

    }
  }
}
