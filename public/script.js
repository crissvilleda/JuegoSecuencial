
const btnStart = document.getElementById('btnStart')
const rojo = document.getElementById('rojo')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 10

let snackbar = ()=>{}

class Game {
  constructor(){
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 400)
  }
  inicializar(){
    this.elegirColor = this.elegirColor.bind(this)
    this.siguienteNivel = this.siguienteNivel.bind(this)
    btnStart.classList.add('hide')
    this.nivel = 1 
    this.colores ={
      rojo, violeta, naranja, verde
    }
  }
  generarSecuencia(){
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n=>Math.floor(Math.random()*4))
  }
  siguienteNivel(){
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }
  trasformarNumeroAColor(num){
    switch(num){
      case 0:
        return 'rojo'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3: 
        return 'verde'
    }
  }
  trasformarColorANumero(color){
    switch(color){
      case 'rojo':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }

  }
  iluminarSecuencia(){
    for(let i = 0; i < this.nivel; i++){
      const color = this.trasformarNumeroAColor(this.secuencia[i])
      setTimeout(()=> this.iluminarColor(color), 1000 * i)

    }
  }
  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout(()=>this.apagarColor(color),350)
  }
  apagarColor(color){
    this.colores[color].classList.remove('light')
  }
  agregarEventosClick(){
    this.colores.rojo.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
  }
  eliminarEventosClick(){
    this.colores.rojo.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)


  }
  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.trasformarColorANumero(nombreColor)
    this.iluminarColor(nombreColor)
    console.log(`${nombreColor} ${numeroColor}`)
    if(numeroColor === this.secuencia[this.subnivel]){
      this.subnivel++
      if(this.subnivel===this.nivel){
        this.nivel++
        this.eliminarEventosClick()
        if(this.nivel ===(ULTIMO_NIVEL + 1)){
          //Gano
        }else {
          setTimeout(this.siguienteNivel,1500)
        }
      }
    } else {
      //Perdio
    }

  }
}

function startGame(){
  const juego = new Game()
  window.juego = juego

}
