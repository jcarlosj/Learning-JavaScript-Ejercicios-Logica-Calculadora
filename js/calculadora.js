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
    calculadora .raton();     // Llama funcionalidades de la calculadora haciendo uso del mouse
    calculadora .teclado();   // Llama funcionalidades de la calculadora haciendo uso del teclado
  },
  raton : function() {
    calculadora .teclas = document .querySelectorAll( '#calculadora #teclado ul li' );    // Obtiene todos los elementos que representan cada botón de la calculadora
    calculadora .pantalla = document .querySelector( '#calculadora #pantalla' );          // Obtiene el elemento que representa la pantalla de la calculadora

    //console.log( calculadora .teclas );

    // Recorre cada uno de los elementos que representan cada una de las teclas de la calculadora y asigna dinámicamente el evento click a cada uno de ellos
    calculadora .teclas .forEach( ( tecla ) => {
      // Crea un evento por cada elemento
      tecla .addEventListener( 'click', calculadora .presionar_click_mouse );
    });
  },
  teclado : function() {
    // Agrega evento 'keydown' (presionar tecla) a todo el DOM
    document .addEventListener( 'keydown', calculadora .presionar_tecla );
  },
  presionar_tecla: function( event ) {
    console .log( event .keyCode );     // identifica el código de la tecla que se está lanzando el evento

    // Capturamos el valor de la teclas de NÚMEROS de acuerdo al 'keycode' de la misma
    if( event .keyCode == 48 || event .keyCode == 96 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 0;
    }
    else if( event .keyCode == 49 || event .keyCode == 97 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 1;
    }
    else if( event .keyCode == 50 || event .keyCode == 98 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 2;
    }
    else if( event .keyCode == 51 || event .keyCode == 99 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 3;
    }
    else if( event .keyCode == 52 || event .keyCode == 100 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 4;
    }
    else if( event .keyCode == 53 || event .keyCode == 101 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 5;
    }
    else if( event .keyCode == 54 || event .keyCode == 102 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 6;
    }
    else if( event .keyCode == 55 || event .keyCode == 103 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 7;
    }
    else if( event .keyCode == 56 || event .keyCode == 104 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 8;
    }
    else if( event .keyCode == 57 || event .keyCode == 105 ) {
      calculadora .accion = 'numero';
      calculadora .valor = 9;
    }
    // Capturamos el valor de la teclas de SIGNOS de acuerdo al 'keycode' de la misma
    else if( event .keyCode == 171 || event .keyCode == 107 ) {
      calculadora .accion = 'signo';
      calculadora .valor = '+';
    }
    else if( event .keyCode == 173 || event .keyCode == 109 ) {
      calculadora .accion = 'signo';
      calculadora .valor = '-';
    }
    else if( event .keyCode == 106 ) {
      calculadora .accion = 'signo';
      calculadora .valor = '*';
    }
    else if( event .keyCode == 111 ) {
      calculadora .accion = 'signo';
      calculadora .valor = '/';
    }
    // Capturamos el valor de la tecla de DECIMAL de acuerdo al 'keycode' de la misma
    else if( event .keyCode == 190 || event .keyCode == 110 ) {
      calculadora .accion = 'decimal';
      calculadora .valor = '.';
    }
    // Capturamos el valor de la tecla de IGUAL de acuerdo al 'keycode' de la misma
    else if( event .keyCode == 13 ) {
      calculadora .accion = 'igual';
      calculadora .valor = '=';
    }
    // Capturamos el valor de la tecla de ESC(27) BackSpace(8) de acuerdo al 'keycode' de la misma
    else if( event .keyCode == 8 || event .keyCode == 27 ) {
      calculadora .accion = 'borrar';
      calculadora .valor = '0';
    }
    else {
      calculadora .accion = '';
      calculadora .valor = '';
    }

    /* NOTA: Tener en cuenta que la configuración del teclado para este ejercicio
             es 'Español (Latinoamérica)' y los 'keyCode' capturará será solo para
             este  */

    calculadora .ejecutar( calculadora .accion, calculadora .valor );
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
