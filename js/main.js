import {canvas} from './canvas.js';
import {Tank} from './components/tank/tank.js';
import {randomMap, objects, objectsKeys} from './helpers/randomMap.js'
import * as keys from './helpers/keyAction.js' //I dont know how the fuck this works

let game = {players:[]}
function startGame(){
    randomMap();
    canvas.start();
    game.players.push(new Tank(window.innerWidth - 200, innerHeight - 100, 'body.png', 'head.png' , 180))
    game.players.push(new Tank(200, 100, 'body2.png', 'head2.png' , 0))
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    
    game.players.forEach(e => {
      if(e != undefined)
        e.paint()
      if(e.header.myBullet != undefined)
        e.header.myBullet.update()
    })

    objectsKeys.forEach( e => {
      objects[e].forEach((_, i) => {
        if(objects[e][i] != undefined){
          objects[e][i].update()
        }
      })
    })

    requestAnimationFrame(updateGame);   
  }   
}
document.addEventListener('DOMContentLoaded', function () {
  startGame();
})


// export {keyActions, keyUp}
export {updateGame, objects, game};