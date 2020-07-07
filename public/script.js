const btnStart = document.getElementById('btnStart')
const red = document.getElementById('red')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
class Game {
  constructor(){
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }
  inicializar(){
    btnStart.classList.add('hide')
    this.nivel = 1
    this.colores ={
      red, violeta, naranja, verde
    }
  }
  generarSecuencia(){
    this.secuencia = new Array(10).fill(0).map(n=>Math.floor(Math.random()*4))
  }
  siguienteNivel(){
    this.iluminarSecuencia()
  }
  trasformarNumeroAColor(num){
    switch(num){
      case 0:
        return 'red'
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
      case 'red':
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
      this.iluminarColor(color)

    }
  }
  iluminarColor(color){
    this.colores[color].classList.add('light')
  }
}

function startGame(){
  const juego = new Game()
  window.juego = juego

}
