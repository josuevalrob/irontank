import {tank} from '../main.js';

let keyActions;
let keyUp;
let supporA = false;
  // we will create the canvas onece it is loaded. 
document.onkeydown = function keyActions (e) {
  e.preventDefault()
  switch (e.keyCode) {
    case 18: // alt
      supporA = true;
      console.log(supporA)
    break;
    case 39: //right key
      if(supporA){
        tank.header.turnRight();      
      } else {
        tank.turnRight();
      }
    break;
    case 37: //left key
      if(supporA){
        tank.header.turnLeft();      
      } else {
        tank.turnLeft();
      }
    break;
    case 38: //Up key
      tank.newPos();      
    break;
    case 40: //down key
      tank.header.shot();  
    break;    
    // case 32: //logs
    // break;
  }
}
document.onkeyup = function keyUp (e) {
  switch (e.keyCode) {
    case 18: //logs
      e.preventDefault();
      supporA = false
      console.log(supporA)
    break;
  }
}

export {keyActions, keyUp}