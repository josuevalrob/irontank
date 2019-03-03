import {canvas} from './canvas.js';
import {Block} from './blockt.js';
let tank;
tank = new Block(100, 50, 'tank.png', 500, 100)


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
})
export {updateGame};