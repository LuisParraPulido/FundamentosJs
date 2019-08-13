/* console.log('Hola Mundo') 

var nombre = 'luis', apellido ='parra';
var apellido = 'parra';

var nombreEnMayusculas = nombre.toUpperCase()
var nombreEnMinusculas = nombre.toLowerCase()
var cantidad_de_letras = nombre.length
var primerCaracter = nombre.charAt(1)

//var nombreCompleto = nombre + ' ' + apellido
//var nombreCompleto = `${nombre} ${apellido}`
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)
var ultimoCaracter = nombre.charAt(nombre.length - 1)

//variables Números
var edad = 27, ejemplo = 2

//edad += 1 //incrementa en 1 la edad
//edad -= 1 decrementa la edad en 1

//edad += ejemplo aumenta deacuerdo a la variable
 var precioVino = 200.3
 //var total = precioVino*3 muestra decimales inexactos
 var total = precioVino*100*3/100 //arregla el problema

 var precioVinoRedondeado = Math.round(precioVino)//redondea valores

var totalstr = total.toFixed(2)//asignar decimales a tener en cuenta

var total2 = parseFloat(totalstr)//pasar de str a número
*/
//FUNCIONES

/*function imprimeEdad(){
    console.log(`${nombre} ${edad}`)
}
imprimeEdad()*/

function imprimeEdad(n, e){
    console.log(`${n} ${e}`)
}
//imprimeEdad('luis', 27)

//Objetos

var luis = {
    nombre:'luis',
    apellido:'parra',
    edad: 27
}
var ale = {
    nombre:'peá',
    apellido:'pola',
    edad: 30
}


function imprimirNombreYEdad(p){
    var {
        nombre,
        edad
    } = p
        
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(luis)
imprimirNombreYEdad(ale)

function cumpleanos(persona){
    //como pasamos el objeto por referecia se va a ver modificado
    persona.edad += 1
}

function cumpleanosSinModificarElObjeto(persona){
    return {
        ...persona,//copia el objeto y crea uno nuevo
        edad: persona.edad + 1
    }
}

//comparaciones
var x = 4, y = '4'
x == y --> true 
x === y --> false
