/* Ejercicio 2: Los cuatro caballos
   -----------------------------
*/
class Caballo {
  /* Constructor */
  constructor( nombre ) {
    this .propietario = nombre;
    this .masViejo = 0;
    this .masRapido = 0;
    this .masOscuro = 0;
  }

}

// Objeto implicito
var caballo = {
  intervalos : 0,
  deMack  : new Caballo( 'Mack' ),
  deSmith : new Caballo( 'Smith' ),
  deJack  : new Caballo( 'Jack' ),
  deWilly : new Caballo( 'Willy' ),
  // Método que plantea la solución propuesta
  solucion: function() {

    if( caballo .deMack .masOscuro > caballo .deSmith .masOscuro &&
        caballo .deMack .masRapido > caballo .deJack .masRapido &&
        caballo .deMack .masViejo > caballo .deJack .masViejo &&
        caballo .deWilly .masRapido > caballo .deJack .masRapido &&
        caballo .deMack .masViejo > caballo .deWilly .masViejo &&
        caballo .deMack .masViejo > caballo .deSmith .masViejo &&
        caballo .deWilly .masOscuro > caballo .deSmith .masOscuro &&
        caballo .deSmith .masRapido > caballo .deJack .masRapido &&
        caballo .deJack .masOscuro > caballo .deSmith .masOscuro
    ) {

      return true;
    }

    return false;
  },
  // Crea un intervalo de tiempo (temporizador) para hacer las validaciones respectivas
  intervalo: setInterval( () => {
    var caballos = [],
        template_html = '';

    caballos .push( caballo .deMack );
    caballos .push( caballo .deSmith );
    caballos .push( caballo .deJack );
    caballos .push( caballo .deWilly );
    //console .log( caballos );

    // Asigna valores aleatorios para los 4 atleta
    caballos .forEach( ( objCaballo ) => {
      objCaballo .masViejo  = caballo .aleatorio( 2 );
      objCaballo .masRapido = caballo .aleatorio( 2 );
      objCaballo .masOscuro = caballo .aleatorio( 2 );
    });
    caballo .intervalos++;

    // Valida si la solución a encontrado respuesta
    if( caballo .solucion() ) {

      // Cancela la acción ciclica del intervalo de tiempo creado
      clearInterval( caballo .intervalo );

      // Valida cual de los caballos es el más viejo
      caballos .forEach( ( objCaballo ) => {
        // Valida cual es el más viejo
        if( objCaballo .masViejo == 2 ) {
          template_html += `<li>El caballo más viejo es el de ${ objCaballo .propietario }</li>`;
        }

        // Valida cual es el más lento
        if( objCaballo .masRapido == 1 ) {
          template_html += `<li>El caballo más lento es el de ${ objCaballo .propietario }</li>`;
        }

        // Valida cual es el más lento
        if( objCaballo .masOscuro == 1 ) {
          template_html += `<li>El caballo más claro es el de ${ objCaballo .propietario }</li>`;
        }
      });

      // Agrega los resultados en el DOM
      document .getElementById( 'solucion' ) .innerHTML = `
        <strong>Resultado: </strong>
        <p>Orden de llegada de los caballos </p>
        <ul> ${ template_html } </ul>
        <p>Cantidad de repeticiones hasta hallar la respuesta ${ caballo .intervalos } </p>
      `;
    }

  }, 1 ),
  aleatorio: function( numero ) {
    return Math .ceil( Math .random() * numero );
  }

}
