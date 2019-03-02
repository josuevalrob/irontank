import {canvas} from './canvas.js';

document.addEventListener('DOMContentLoaded', function () {
  // we will create the canvas onece it is loaded. 
  startGame();
})

function startGame(){
  canvas.start();
}


function updateGame (){
  canvas.bkgDraw()
  requestAnimationFrame(updateGame);      
}

export {updateGame};