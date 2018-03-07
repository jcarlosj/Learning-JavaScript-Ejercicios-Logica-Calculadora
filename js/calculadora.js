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
  valor : null,
  pantalla : null,
  inicio : function() {
    calculadora .teclas = document .querySelectorAll( '#calculadora #teclado ul li' );    // Obtiene todos los elementos que representan cada botón de la calculadora
    calculadora .pantalla = document .querySelector( '#calculadora #pantalla' );          // Obtiene el elemento que representa la pantalla de la calculadora

    //console.log( calculadora .teclas );

    // Recorre cada uno de los elementos
    calculadora .teclas .forEach( ( tecla ) => {
      // Crea un evento por cada elemento
      tecla .addEventListener( 'click', calculadora .presionar );
    });

  },
  presionar: function( event ) {
    calculadora .accion = event .target .getAttribute( 'class' );     // Obtiene el atributo del elemento que lanzó el evento
    calculadora .valor = event .target .innerHTML;                    // Obtiene el contenido del elemento
    calculadora .ejecutar( calculadora .accion, calculadora .valor );
  },
  ejecutar: function( accion, valor ) {
    console .log( accion );

    if( accion == 'numero' ) {
      // Valida si la pantalla tiene un 0
      if( calculadora .pantalla .innerHTML == 0 ) {
          calculadora .pantalla .innerHTML = valor;       // Reemplaza el valor en la pantalla de la calculadora
      }
      else {
          calculadora .pantalla .innerHTML += valor;      // Agrega el valor en la pantalla de la calculadora
      }

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
