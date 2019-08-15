// function heredaDe(prototipoHijo, prototipoPadre){
//   var fn = function (){}
//   fn.prototype = prototipoPadre.prototype
//   prototipoHijo.prototype = new fn
//   prototipoHijo.prototype.constructor = prototipoHijo
// }

// function Persona(nombre, apellido, altura) {
//   this.nombre = nombre
//   this.apellido = apellido
//   this.altura = altura
// }

// Persona.prototype.saludar = function () {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.soyAlto = function () {
//   if(this.altura > 1.7) {
//     console.log('Soy alto')
//   }else {
//     console.log('Soy bajo')
//   }
// }
//Persona.prototype.soyAlto = function () {
//  return this.altura > 1.7 ---> me retorna true o false
// }


// function Desarrollador(nombre, apellido){
//   this.nombre = nombre
//   this.apellido = apellido
// }
// heredaDe(Desarrollador, Persona)

// Desarrollador.prototype.saludar = function (){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
// }

// class Persona {
//   constructor(nombre, apellido, altura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
//     }
//
//     saludar() {
//       console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
//     }
//
//     soyAlto() {
//       if(this.altura > 1.7) {
//         console.log('Soy alto')
//       }else {
//         console.log('Soy bajo')
//       }
//     }
//
// }
//
//
// class Desarrollador extends Persona {
//   constructor(nombre, apellido, altura){
//     super(nombre, apellido, altura)
//   }
//
//   saludar(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
//   }
//
// }

// var luis = new Persona('luis', 'parra', 1.72)
//var ale = new Desarrollador('ale', 'pila', 1.70)

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    }
    saludar(fn) {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
      if(fn){
        fn(this.nombre, this.apellido, false)
      }
    }
    soyAlto() {
      if(this.altura > 1.7) {
        console.log('Soy alto')
      }else {
        console.log('Soy bajo')
      }
    }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }
  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    if(fn){
      fn(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mira, no sabia que eras desarrollador`)
  }
}


var luis = new Persona('luis', 'parra', 1.72)
var ale = new Desarrollador('ale', 'pila', 1.70)

luis.saludar(responderSaludo)
ale.saludar(responderSaludo)
