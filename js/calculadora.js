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
  signo : false,
  decimal : false,
  resultado : false,
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
      calculadora .signo = false;
      // Valida si la pantalla tiene un 0
      if( calculadora .pantalla .innerHTML == 0 ) {
          calculadora .pantalla .innerHTML = valor;       // Reemplaza el valor en la pantalla de la calculadora
      }
      else {
          // Valida si ya se obtuvo el resultado al presionar el botón igual, o aún se continua formando una expresión matemática
          if( calculadora .resultado ) {
            calculadora .pantalla .innerHTML = valor;       // Reemplaza el valor en la pantalla de la calculadora
            calculadora .resultado = false;
          }
          else {
            calculadora .pantalla .innerHTML += valor;      // Agrega el valor en la pantalla de la calculadora
            calculadora .decimal = false;
          }

      }

    }
    if( accion == 'signo' ) {

      if( calculadora .signo == false ) {
        calculadora .pantalla .innerHTML += valor;      // Agrega el valor en la pantalla de la calculadora
        calculadora .signo = true;
      }
      calculadora .resultado = false;

    }
    if( accion == 'decimal' ) {
      // Valida que
      if( calculadora .decimal == false ) {

          calculadora .pantalla .innerHTML += valor;
          calculadora .decimal = true;
      }
    }
    if( accion == 'igual' ) {

      calculadora .pantalla .innerHTML = eval( calculadora .pantalla .innerHTML );
      /* NOTA: 'eval' es una propiedad de la función del objeto global de JavaScript que evalua si la cadena que se le pasa
                representa una expresión aritmética */

      calculadora .resultado = true;
    }
    if( accion == 'borrar' ) {
      calculadora .pantalla .innerHTML = 0;
      calculadora .signo = false;
      calculadora .decimal = false;
      calculadora .resultado = false;
    }
  }
}
