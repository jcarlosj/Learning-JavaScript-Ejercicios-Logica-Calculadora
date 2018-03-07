/* Ejercicio 4: Seis amigos de vacaciones
   -----------------------------
*/
class Persona {
  /* Constructor */
  constructor( nombre ) {
    this .propietario = nombre;
    this .enAvion = false;
    this .enCoche = false;
    this .enOtro = false;
  }
}

// Objeto implicito
var vacaciones = {
  // Atributos (Propiedades)
  intervalos : 0,
  alejandro  : new Persona( 'Alejandro' ),
  benito     : new Persona( 'Benito' ),
  andres     : new Persona( 'Andrés' ),
  carlos     : new Persona( 'Carlos' ),
  dario      : new Persona( 'Darío' ),
  tomas      : new Persona( 'Tomás' ),
  // Método que plantea la solución propuesta
  solucion: function() {

    if( !vacaciones .alejandro .enCoche && !vacaciones .benito .enAvion &&
        !vacaciones .alejandro .enAvion && !vacaciones .benito .enCoche &&
        vacaciones .alejandro .enOtro && vacaciones .benito .enOtro &&
        vacaciones .andres .enAvion && !vacaciones .andres .enCoche && !vacaciones .andres .enOtro &&
        !vacaciones .carlos .enOtro && !vacaciones .carlos .enAvion && vacaciones .carlos .enCoche &&
        !vacaciones .dario .enOtro && vacaciones .dario .enAvion && !vacaciones .dario .enCoche
    ) {
      var viaje = [];

      viaje .push( vacaciones .alejandro );
      viaje .push( vacaciones .benito );
      viaje .push( vacaciones .andres );
      viaje .push( vacaciones .carlos );
      viaje .push( vacaciones .dario );
      viaje .push( vacaciones .tomas );
      console .log( ' +++ ', viaje );

      return true;
    }

    return false;
  },
  // Crea un intervalo de tiempo (temporizador) para hacer las validaciones respectivas
  intervalo: setInterval( () => {
    var viaje = [],
        template_html = '';

    viaje .push( vacaciones .alejandro );
    viaje .push( vacaciones .benito );
    viaje .push( vacaciones .andres );
    viaje .push( vacaciones .carlos );
    viaje .push( vacaciones .dario );

    //console .log( viaje );

    // Asigna valores aleatorios para los 4 atleta
    viaje .forEach( ( objMedioTransporte ) => {
      objMedioTransporte .enAvion = vacaciones .aleatorio();
      objMedioTransporte .enCoche = vacaciones .aleatorio();
      objMedioTransporte .enOtro  = vacaciones .aleatorio();
    });
    vacaciones .intervalos++;

    // Valida si la solución a encontrado respuesta
    if( vacaciones .solucion() ) {
      var enAvion = 0,
          enCoche = 0,
          enOtro = 0;

      // Cancela la acción ciclica del intervalo de tiempo creado
      clearInterval( vacaciones .intervalo );

      // Valida cual de los caballos es el más viejo
      viaje .forEach( ( objMedioTransporte ) => {
        // Valida cual es el más viejo
        console .log( 'R: ', objMedioTransporte );

        /* Valida si el medio de transporte respectivo de cada viajero es verdadero
          y crea un contador para determinar cuantos van por determinado medio de transporte */
        if( objMedioTransporte .enAvion ) {
          enAvion ++;
        }
        if( objMedioTransporte .enCoche ) {
          enCoche ++;
        }
        if( objMedioTransporte .enOtro ) {
          enOtro ++;
        }

      });

      console .log( `En avión: ${ enAvion }` );
      console .log( `En coche: ${ enCoche }` );
      console .log( `En otro: ${ enOtro }` );

      if( enAvion <= 2 ) {
        vacaciones .tomas .enAvion = true;
        mensaje = 'avión';
      }
      if( enCoche <= 2 ) {
        vacaciones .tomas .enCoche = true;
        mensaje = 'coche';
      }
      if( enOtro <= 2 ) {
        vacaciones .tomas .enOtro = true;
        mensaje = 'otro medio de transporte';
      }

      // Agrega los resultados en el DOM
      document .getElementById( 'solucion' ) .innerHTML = `
        <strong>Resultado: </strong>
        <p> ${ vacaciones .tomas .propietario} llega a su destino en ${ mensaje } </p>
      `;
    }

  }, 1 ),
  aleatorio: function() {
     if( Math .floor( Math .random() * 2 ) == 0 ) {
       return true;
     }

     return false;
  }
}
