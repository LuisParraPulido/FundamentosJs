var luis = {
    nombre: 'luis',
    apellido: 'parra',
    edad: 27,
    peso: 76,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var ale = {
    nombre: 'ale',
    edad: 11

}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero === true){
        console.log('Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }else{
        console.log('No es cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('dj')
    }
    if(persona.guitarrista){
        console.log('guitarrista')
    }
    if(persona.drone){
        console.log('drone')
    }
}

const MAYORIA_DE_EDAD = 18

/*function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}*/

//const ES_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_DE_EDAD
const ES_MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD
const ES_MENOR_DE_EDAD = persona => !ES_MAYOR_DE_EDAD(persona)

function imprimirSiEsMayorDeEdad(persona){
    if(ES_MAYOR_DE_EDAD(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(ES_MENOR_DE_EDAD(persona)){
        console.log('ACCESO DENEGADO')
    }
}

//------------------------ciclo FOR Y WHILE-----------

//console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


// for (var i = 1; i <= DIAS_DEL_ANO; i++) {
//     var random = Math.random()
//
//     if (random < 0.25){
//         aumentarDePeso(luis)
//     }else if (random < 0.5){
//         adelgazar(luis)
//     }
//
// }

const META = luis.peso -3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

while (luis.peso > META){
  // debugger
  if (comeMucho()) {
    aumentarDePeso(luis)
  }
  if (realizaDeporte()) {
    adelgazar(luis)
  }
  dias += 1
}

//console.log(`Pasaron ${dias} días hasta que ${luis.nombre} adelgazó 3kg`)

//console.log(`Al final del año ${luis.nombre} pesa ${luis.peso.toFixed(1)}kg`)

// var contador = 0
//
// const llueve = () => Math.random() < 0.25
//
// do {
//   contador++
// }while(!llueve())
//
// if (contador < 2){
//   console.log(`Fui a ver si llovía ${contador} vez`)
// }else{
//   console.log(`Fui a ver si llovía ${contador} veces`)
// }





var signo = prompt('¿cual es tu signo?')

console.log(signo)

switch (signo) {
  case 'geminis':
  case 'géminis':
    console.log('Eres la verga')
    break;
  case 'tauro':
    console.log('tambien Eres la verga')
    break;
  case 'cancer':
    console.log('tu no')
    break;

  default:
  console.log('no es un signo zodiacal valido')
}
