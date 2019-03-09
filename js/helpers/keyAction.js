import {tank} from '../main.js';
import {objects, objectsKeys} from './randomMap.js'

let keyActions;
  // we will create the canvas onece it is loaded. 
  document.onkeydown = function keyActions (e) {
    switch (e.keyCode) {
      case 39: //right key
        e.preventDefault()
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
      case 65: //Up key
        tank.header.turnRight();      
      break;
      case 68: //Up key
        tank.header.turnLeft();      
      break;
      case 32: //logs
        e.preventDefault();
      break;
    }
  }
export {keyActions}