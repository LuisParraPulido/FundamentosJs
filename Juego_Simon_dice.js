// optener todos los campos del html
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10


// la clase juego va a tener toda la logíca del juego
     class Juego {
       constructor() {
         this.inicializar = this.inicializar.bind(this)
         this.inicializar()
         this.generarSecuencia()
         setTimeout(this.siguienteNivel, 500)

       }

       inicializar() {
         //terminamos de atar la referencia this a esta class
         this.elegirColor = this.elegirColor.bind(this)
         this.siguienteNivel = this.siguienteNivel.bind(this)
         this.toggleBtnEmpezar()
         this.nivel = 1
         //guardamos colores podemos omitir celeste: celeste js nos lo permite
         this.colores = {
           celeste,
           violeta,
           naranja,
           verde
         }
       }

       toggleBtnEmpezar() {
         if(btnEmpezar.classList.contains('hide')){
           btnEmpezar.classList.remove('hide')
         } else {
           btnEmpezar.classList.add('hide') //le agrega una clase de css al botón en este caso hide
           //inicializamos nivel en 1
         }
       }


//creamos la función para generar las secuencias aleatorias
       generarSecuencia() {
         //podemos crear el atributo de la clase juegos desde aca
         //creamos un nuevo Array de tamaño 10 con new y lo llenamos de 0 con fill
         //debemos llenarlo porque map() no puede trabajar con un Array vacio
         //usamos un random para llenar el Array
         //multiplicamos por 4 ya que como random se mueve entre 0 y 1 nos va a dar valores entre 4 y 0, nunca va a ser 4
         //con math.floor redondeamos hacia abajo y obtenemos 0,1,2,3 lo que queremos
         this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4) )
       }

       siguienteNivel() {
         this.subnivel = 0
         this.iluminarSecuencia()
         this.agregarEventosClick()
       }

       transformarNumeroAColor(numero) {
         switch (numero) {
           case 0:
             return 'celeste'
           case 1:
            return 'violeta'
           case 2:
            return 'naranja'
           case 3:
            return 'verde'

         }
       }
       transformarColorANumero(color) {
         switch (color) {
           case 'celeste':
             return 0
           case 'violeta':
            return 1
           case 'naranja':
            return 2
           case 'verde':
            return 3

         }
       }


       iluminarSecuencia() {
         //usar const antes de let y let antes de var
         for (let i = 0; i < this.nivel; i++) {
           const color = this.transformarNumeroAColor(this.secuencia[i])
           setTimeout(() => this.iluminarColor(color), 1000 * i)
         }
       }


       iluminarColor(color) {
         // pedimos las clases de css y añadimos la iluminación
         this.colores[color].classList.add('light')
         //dejamos el color un tiempo y luego se lo removemos para dar el efecto de parpadeo
         setTimeout(() => this.apagarColor(color), 350)
       }

       apagarColor(color) {
         this.colores[color].classList.remove('light')
       }

       agregarEventosClick() {
         //es importante tener cuidado con el this ya que cambia al llamar el método even
         //con bind fijamos el this a la clase juego y asi no cambia a window
         this.colores.celeste.addEventListener('click', this.elegirColor)
         this.colores.verde.addEventListener('click', this.elegirColor)
         this.colores.violeta.addEventListener('click', this.elegirColor)
         this.colores.naranja.addEventListener('click', this.elegirColor)
       }

       eliminarEventosClick() {
         this.colores.celeste.removeEventListener('click', this.elegirColor)
         this.colores.verde.removeEventListener('click', this.elegirColor)
         this.colores.violeta.removeEventListener('click', this.elegirColor)
         this.colores.naranja.removeEventListener('click', this.elegirColor)
       }

       elegirColor(ev) {
         const nombreColor = ev.target.dataset.color
         const numeroColor = this.transformarColorANumero(nombreColor)
         this.iluminarColor(nombreColor)
         if(numeroColor === this.secuencia[this.subnivel]){
           this.subnivel++
           if (this.subnivel === this.nivel) {
             this.nivel++
             this.eliminarEventosClick()
             if(this.nivel === (ULTIMO_NIVEL + 1)){
               this.ganoElJuego()
             } else {
              setTimeout(this.siguienteNivel, 1500)
              }
           }
         } else {
           this.perdioElJuego()
         }
       }

       ganoElJuego() {
         swal('luis', 'Felicitaciones, Ganaste el juego!', 'success')
          .then(this.inicializar)
          }


       perdioElJuego() {
         swal('luis', 'lo lamentamos, perdiste :(', 'error')
          .then(() => {
            this.eliminarEventosClick()
            this.inicializar()
          })
       }





     }

     function empezarJuego() {
       //poner la variable dentro de window para poder debuggearla
       window.juego = new Juego()
     }
