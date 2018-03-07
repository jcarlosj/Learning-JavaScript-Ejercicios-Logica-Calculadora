/* Ejercicio 3: Los cuatro perros
   -----------------------------
*/
class Perro {
  /* Constructor */
  constructor( raza ) {
    this .raza = raza;
    this .cantidadComida = 0;
  }

}


// Objeto implicito
var perro = {
  // Atributos (Propiedades)
  intervalos : 0,
  galgo   : new Perro( 'Galgo' ),
  dogo    : new Perro( 'Dogo' ),
  alano   : new Perro( 'Alano' ),
  podenco : new Perro( 'Podenco' ),
  // Método que plantea la solución propuesta
  solucion: function() {
    // Valida la solución planteada
    if( perro .podenco .cantidadComida > perro .galgo .cantidadComida &&
        perro .alano .cantidadComida > perro .galgo .cantidadComida &&
        perro .dogo .cantidadComida > perro .alano .cantidadComida &&
        perro .dogo .cantidadComida > perro .podenco .cantidadComida
      ) {

      return true;
    }

    return false;
  },
  aleatorio: function( numero ) {
    return Math .ceil( Math .random() * numero );
  },
  // Crea un intervalo de tiempo (temporizador) para hacer las validaciones respectivas
  intervalo: setInterval( () => {
    var perros = [],
        template_html = '';

    perros .push( perro .galgo );
    perros .push( perro .dogo );
    perros .push( perro .alano );
    perros .push( perro .podenco );

    //console .log( caballos );

    // Asigna valores aleatorios para los 4 atleta
    perros .forEach( ( objPerro) => {
      objPerro .cantidadComida  = perro .aleatorio( 4 );
    });
    perro .intervalos++;

    // Valida si la solución a encontrado respuesta
    if( perro .solucion() ) {

      // Cancela la acción ciclica del intervalo de tiempo creado
      clearInterval( perro .intervalo );

      let menor = 0,
          raza = '';
      // Valida cual de los perros come menos
      perros .forEach( ( objPerro ) => {

        if( menor != 0 ) {
          if( menor > objPerro .cantidadComida  ) {
            menor = objPerro .cantidadComida;
            raza = objPerro .raza;
          }
        }
        else {
          menor = objPerro .cantidadComida;
          raza = objPerro .raza
        }

        console .log( objPerro );
      });

      // Agrega los resultados en el DOM
      document .getElementById( 'solucion' ) .innerHTML = `
        <strong>Resultado: </strong>
        <p>El perro de raza ${ raza } es el que come menos</p>
      `;
    }

  }, 10 )
}
