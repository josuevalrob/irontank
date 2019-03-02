import {canvas} from './canvas.js';
import {Obstacle} from './obstacles.js';
let tank;
tank = new Obstacle(100, 50, 'tank.png', 100, 100)


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