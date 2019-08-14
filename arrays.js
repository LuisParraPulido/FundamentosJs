var luis = {
    nombre: 'luis',
    apellido: 'parra',
    edad: 27,
    peso: 76,
    altura: 1.72,
    cantidad_de_libros: 8
}

var juan = {
    nombre: 'juan',
    edad: 22,
    altura: 1.80,
    cantidad_de_libros: 6
}

var vane = {
    nombre: 'vane',
    edad: 30,
    altura: 1.56,
    cantidad_de_libros: 12
}
var puto = {
    nombre: 'puto',
    edad: 25,
    altura: 1.90,
    cantidad_de_libros: 80
}

var personas = [luis, juan, vane, puto]

// for (var i = 0; i < personas.length; i++){
//   var persona = personas[i]
//   console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

const esAlta = persona => persona.altura > 1.7
// const esAlta = ({ altura }) => altura > 1.7

var personasAltas = personas.filter(esAlta)

// console.log(personasAltas)

const esBaja = persona => persona.altura < 1.7

var personasBajas = personas.filter(esBaja)

// console.log(personasBajas)

// const pasarAlturaACms = persona => {
  //haciendo esto tambien modificamos el objeto original
  // persona.altura *= 100
  // return persona

  //para evitar la modificación hacemos lo siguiente
 //copiamos el objeto y lo modificamos
  // return {
//     ...persona,
//     altura: persona.altura * 100
//   }
//
// }

// manera más prolija de escribir la arrow function anterior
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
  })//los () nos permiten omitir el return

var personasCms = personas.map(pasarAlturaACms)

const reducer = (acum, { cantidad_de_libros }) => acum + cantidad_de_libros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
