import {canvas} from './canvas.js';
import {Tank} from './components/tank/tank.js';
import {randomMap, objects, objectsKeys} from './helpers/randomMap.js'
import * as keys from './helpers/keyAction.js' //I dont know how the fuck this works

let playerOne 
let playerTwo
function startGame(){
    randomMap();
    canvas.start();
    playerTwo = new Tank(200, 100, 'body2.png', 'head2.png' , 0)
    playerOne = new Tank(window.innerWidth - 200, innerHeight - 100, 'body.png', 'head.png' , 180)
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    if(playerOne != undefined && playerTwo != undefined){
      playerOne.paint();
      playerTwo.paint();
      
      if(playerOne.header.myBullet != undefined)
        playerOne.header.myBullet.update();
      
      if(playerTwo.header.myBullet != undefined)
        playerTwo.header.myBullet.update();
    }
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
export {updateGame, objects, playerOne, playerTwo};