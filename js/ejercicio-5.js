/* Ejercicio 5: Silencio
   -----------------------------
*/
var habla = {
  angela: 0,
  rosa  : 0,
  celia : 0,
  // Método que plantea la solución propuesta
  solucion: function() {
    // Valida la solución planteada
    if( habla .angela < habla .rosa && habla .celia > habla .rosa ) {

      return true;
    }

    return false;
  },
  aleatorio: function( numero ) {
    return Math .ceil( Math .random() * numero );
  },
  // Crea un intervalo de tiempo (temporizador) para hacer las validaciones respectivas
  intervalo: setInterval( () => {

    // Asigna valores aleatorios para los 4 atleta
    habla .angela = habla .aleatorio( 3 );
    habla .rosa   = habla .aleatorio( 3 );
    habla .celia  = habla .aleatorio( 3 );

    // Valida si la solución a encontrado respuesta
    if( habla .solucion() ) {

      // Cancela la acción ciclica del intervalo de tiempo creado
      clearInterval( habla .intervalo );

      console .group( 'Chicas' );
        console .log( 'Ángela: ', habla .angela );
        console .log( 'Rosa: ', habla .rosa );
        console .log( 'Celia: ', habla .celia );
      console .groupEnd();

      if( habla .angela < habla .rosa ) {
        if( habla .angela < habla .celia ) {
          mensaje = 'Ángela habla mas bajo que Celia';
        }
        else {
          mensaje = 'Celia habla mas bajo que Ángela';
        }
      }
      else if( habla .rosa < habla .celia ) {
        mensaje = 'Rosa habla mas bajo que Celia';
      }
      else {
        mensaje = 'Celia habla mas bajo que Rosa';
      }

      // Agrega los resultados en el DOM
      document .getElementById( 'solucion' ) .innerHTML = `
        <strong>Resultado: </strong>
        <p>${ mensaje }</p>
      `;
    }

  }, 10 )
}
