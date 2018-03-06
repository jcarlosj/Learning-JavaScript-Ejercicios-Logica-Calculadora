/* Ejercicio 1: Los cuatros atletas
   -----------------------------
*/
// Objeto implicito
var atleta = {
  // Atributos (Propiedades)
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  // Método que plantea la solución propuesta
  solucion: function() {
    // Valida la solución planteada
    if( atleta .c > atleta .b &&
        atleta .d > atleta .b &&
        atleta .d > atleta .c &&
        atleta .d < atleta .a
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

    // Asigna valores aleatorios para los 4 atleta
    atleta .a = atleta .aleatorio( 4 );
    atleta .b = atleta .aleatorio( 4 );
    atleta .c = atleta .aleatorio( 4 );
    atleta .d = atleta .aleatorio( 4 );

    // Valida si la solución a encontrado respuesta
    if( atleta .solucion() ) {

      // Cancela la acción ciclica del intervalo de tiempo creado
      clearInterval( atleta .intervalo );

      console .group( 'atleta' );
        console .log( 'A: ', atleta .a );
        console .log( 'B: ', atleta .b );
        console .log( 'C: ', atleta .c );
        console .log( 'D: ', atleta .d );
      console .groupEnd();

      // Agrega los resultados en el DOM
      document .getElementById( 'solucion' ) .innerHTML = `
        <strong>Resultado: </strong>
        <p>Orden de llegada de los atleta</p>
        <ul>
          <li>Atleta A: Llego en lugar # ${ atleta .a }</li>
          <li>Atleta B: Llego en lugar # ${ atleta .b }</li>
          <li>Atleta C: Llego en lugar # ${ atleta .c }</li>
          <li>Atleta D: Llego en lugar # ${ atleta .d }</li>
        </ul>
      `;
    }

  }, 10 )
}
