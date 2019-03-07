import {canvas} from './canvas.js';
import {Tank} from './tank.js';
import {randomMap, objects, objectsKeys} from './randomMap.js'
randomMap();

let tank = new Tank(100, 50, 'tank.png', 100, 100)

function startGame(){
    canvas.start();
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    tank.update();
    
    if(tank.myBullet != undefined)
      tank.myBullet.update();
    
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
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 39: //right key
      tank.turnRight();
    break;
    case 37: //left key
      tank.turnLeft();
    break;
    case 38: //Up key
      tank.newPos();      
    break;
    case 40: //down key
      e.preventDefault();
      tank.shot();  
    break;
    case 32: //logs
      e.preventDefault();
      console.log(objects.blocks[0].left());  
    break;
  }
}
})


export {updateGame, objects};