import {canvas} from './canvas.js';
import {Tank} from './components/tank/tank.js';
import {randomMap, objects, objectsKeys} from './helpers/randomMap.js'
import * as keys from './helpers/keyAction.js' //I dont know how the fuck this works

window.players = [] //quitar window
// Why the fuck are we giving a property to the windows object??
// Well, it sucks, but for being honest, it was the easiest way to access
// to all my players from the dom. 
// I know, it do not look well, if you found a better way to do it, plase, help us! 

function startGame(){
    randomMap();
    canvas.start();
    // window.players.push(new Tank(window.innerWidth - 200, innerHeight - 100, 'body.png', 'head.png' , 180))
    window.players.push(new Tank(350, 100, 'body.png', 'head.png' , 180))
    window.players.push(new Tank(200, 100, 'body2.png', 'head2.png' , 0))
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    
    window.players.forEach(e => {
      e.paint()
    })

    objectsKeys.forEach( e => {
      objects[e].forEach((_, i) => {
        if(objects[e][i] != undefined)
          objects[e][i].update()
      })
    })
    
    // Dom update
    if(window.players.length){
      red.innerHTML = window.players[1].lifes
      green.innerHTML = window.players[0].lifes
    }
    requestAnimationFrame(updateGame);   
  }   
}
document.addEventListener('DOMContentLoaded', function () {
  startGame();
})

var red = document.getElementById("red").getElementsByTagName('span')[0]
var green = document.getElementById("green").getElementsByTagName('span')[0];

export {updateGame, objects};