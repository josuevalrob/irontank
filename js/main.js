import {canvas} from './canvas.js';
import {Tank} from './components/tank/tank.js';
import {randomMap, objects, objectsKeys} from './helpers/randomMap.js'
import {keyActions} from './helpers/keyAction.js' //I dont know how the fuck this works

randomMap();

let tank = new Tank(200, 120, 0)
function startGame(){
    canvas.start();
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    tank.paint();
    
    if(tank.header.myBullet != undefined)
      tank.header.myBullet.update();
    
    objectsKeys.forEach( e => {
      objects[e].forEach((_, i) => {
          objects[e][i].update()
      })
    })

    requestAnimationFrame(updateGame);   
  }   
}
document.addEventListener('DOMContentLoaded', function () {
  // we will create the canvas onece it is loaded. 
  startGame();
})


export {updateGame, objects, tank};