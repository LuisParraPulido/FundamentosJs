const luis = {
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
//
// function esMayorDeEdad(persona) {
//   let mensaje
//   const MAYORIA_EDAD = 18
//   if(persona.edad > MAYORIA_EDAD) {
//     mensaje = 'Es mayor de edad'
//   }else {
//     mensaje = 'Es menor de edad'
//   }
//   console.log(mensaje)
// }
//
// esMayorDeEdad(luis)

//
// function diasEntreFechas(fecha1, fecha2) {
//   const unDia = 1000 * 60 * 60 * 24
//   const diferencia = Math.abs(fecha1 - fecha2)
//
//   return Math.floor(diferencia / unDia)
//
// }
//
// const hoy = new Date()
// const nacimiento = new Date(1992, 5, 20)


// -----------------------funciones recursivas-

// function divisionEntera(dividendo, divisor) {
//   if(dividendo < divisor) {
//     return 0
//   }
//
//   return 1 + divisionEntera(dividendo - divisor, divisor)
//
//   }


// ----------------- Memoizacion --------------------
// function factorial(n) {
//   if(!this.cache) {
//     this.cache = {}
//   }
//
//   debugger
//   if(this.cache[n]){
//     return this.cache[n]
//   }
//
//   if(n === 1) {
//     return 1
//   }
//
//   this.cache[n] = n * factorial(n - 1)
//   debugger
//   return this.cache[n]
//
// }


//----------------------------closures------------------

//
// function crearSaludo(finalSaludo){
//   return function (nombre){
//     console.log(`Hola ${nombre} ${finalSaludo}`)
//   }
// }
//
// const saludoArgentino = crearSaludo('che')
// const saludoMexicano = crearSaludo('güey')
// const saludoColombiano = crearSaludo('parce')
//
// saludoArgentino('luis')
// saludoMexicano('luis')
// saludoColombiano('luis')


// ------------------ Estructuras de datos inmutanbles -------------


// const cumpleanosInmutable = persona => ({
//   ...persona,
//   edad: persona.edad + 1
// })


















//fin
