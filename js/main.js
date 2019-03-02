import {canvas} from './canvas.js';
import {Component} from './component.js';
let tank;
tank = new Component(100, 50, 'tank.png', 100, 100)


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