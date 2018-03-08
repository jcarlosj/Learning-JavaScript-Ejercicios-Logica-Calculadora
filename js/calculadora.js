/* Calculadora */
window .onload = init;

// Función iniciadora
function init () {
  calculadora .inicio();
}

/* Objeto Implicito */
var calculadora = {
  teclas : null,          // Obtiene todos los elementos que representan las teclas disponibles
  accion : null,          // Obtiene la acción a realizar por la calculadora
  valor : null,           // Obtiene el valor de cada elemento en el momento de ser disparado un evento (presionada una tecla)
  pantalla : null,        // Obtiene el valor (cadena) que se mostrará en la pantalla de la calculadora
  signo : false,          // Estado de las teclas de signo (Si fue no presionada)
  decimal : false,        // Estado de la tecla punto decimal (Si fue o no presionada)
  resultado : false,      // Estado de la tecla igual (Si fue o no presionada)
  /* Función que inicializa la calculadora */
  inicio : function() {
    calculadora .teclas = document .querySelectorAll( '#calculadora #teclado ul li' );    // Obtiene todos los elementos que representan cada botón de la calculadora
    calculadora .pantalla = document .querySelector( '#calculadora #pantalla' );          // Obtiene el elemento que representa la pantalla de la calculadora

    //console.log( calculadora .teclas );

    // Recorre cada uno de los elementos que representan cada una de las teclas de la calculadora y asigna dinámicamente el evento click a cada uno de ellos
    calculadora .teclas .forEach( ( tecla ) => {
      // Crea un evento por cada elemento
      tecla .addEventListener( 'click', calculadora .presionar_click_mouse );
    });

  },
  /* Función que permite que cada evento pueda identificar a cada elemento o tecla de la calculadora a través de su atributo 'class'
     y determinar la acción a realizar y obtener el valor de cada elemento a través del evento programado para cada uno de ellos */
  presionar_click_mouse: function( event ) {
    calculadora .accion = event .target .getAttribute( 'class' );     // Obtiene el atributo del elemento que lanzó el evento
    calculadora .valor = event .target .innerHTML;                    // Obtiene el contenido del elemento
    calculadora .ejecutar( calculadora .accion, calculadora .valor );
  },
  /* Función que permite que cada tipo de tecla pueda realizar una acción determinada de acuerdo  */
  ejecutar: function( accion, valor ) {
    console .log( accion );

    // Valida si se ha presionado una tecla de número
    if( accion == 'numero' ) {
      calculadora .signo = false;
      // Valida si la pantalla tiene un 0
      if( calculadora .pantalla .innerHTML == 0 ) {
          calculadora .pantalla .innerHTML = valor;       // Reemplaza el valor en la pantalla de la calculadora
      }
      else {
          // Valida si se presionó la tecla igual para obtener resultado
          if( calculadora .resultado ) {
            // Se obtuvo el resultado (se presionó la tecla igual)
            calculadora .pantalla .innerHTML = valor;       // Reemplaza el valor en la pantalla de la calculadora
            calculadora .resultado = false;
          }
          else {
            // No se ha obtenido resultado. Se sigue formando una expresión aritmética
            calculadora .pantalla .innerHTML += valor;      // Agrega el valor en la pantalla de la calculadora
            calculadora .decimal = false;
          }
      }

    }
    // Valida si se ha presionado una tecla de signo (operación matemática)
    if( accion == 'signo' ) {
      // Valida que la tecla signo no se haya presionado con anterioridad
      if( calculadora .signo == false ) {
        calculadora .pantalla .innerHTML += valor;      // Agrega el valor en la pantalla de la calculadora
        calculadora .signo = true;
      }
      calculadora .resultado = false;
    }
    // Valida si se ha presionado la tecla de punto decimal
    if( accion == 'decimal' ) {
      // Valida que la tecla de punto decimal no se haya presionado con anterioridad
      if( calculadora .decimal == false ) {
          calculadora .pantalla .innerHTML += valor;
          calculadora .decimal = true;
          calculadora .resultado = false;
      }
    }
    // Valida si se ha presionado la tecla de igual (para obtener resultado)
    if( accion == 'igual' ) {

      calculadora .pantalla .innerHTML = eval( calculadora .pantalla .innerHTML );
      /* NOTA: 'eval' es una propiedad de la función del objeto global de JavaScript que evalua si la cadena que se le pasa
                representa una expresión aritmética */

      calculadora .resultado = true;
    }
    // Valida si se ha presionado la tecla de borrar resultado
    if( accion == 'borrar' ) {
      calculadora .pantalla .innerHTML = 0;
      calculadora .signo = false;
      calculadora .decimal = false;
      calculadora .resultado = false;
    }
    // TODO: Agregar la operación de cuadrado de un número
    // TODO: Poder escribir números decimales desde el principio (0.3748 por ejemplo no es posible en el momento)
    // TODO: Habilitar la funcionalidad de la tecla (M) Memoria
    // TODO: Habilitar la funcionalidad de la tecla (%) Porcentaje
  }
}
