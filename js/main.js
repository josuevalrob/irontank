import {canvas} from './canvas.js';
import {Tank} from './tank.js';
let tank;
tank = new Tank(100, 50, 'tank.png', 100, 100)


function startGame(){
  canvas.start();
}


function updateGame (){
  canvas.bkgDraw()
  tank.update();
  requestAnimationFrame(updateGame);      
}



document.addEventListener('DOMContentLoaded', function () {
  // we will create the canvas onece it is loaded. 
  startGame();
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 39: //right key
      tank.turn(39);
    break;
    case 37: //left key
      tank.turn(37);
    break;
    // case 38: //Up key
    //   tank.turnRight();      
    // break;
    // case 40: //down key
    //   tank.turnRight();  
    // break;
  }
}
})


export {updateGame};