import {playerOne, playerTwo} from '../main.js';

let keyActions;
let keyUp;
let supporA = false
let supporB = false

let newPosA = false
let newPosB = false

// we will create the canvas onece it is loaded. 
document.onkeydown = function keyActions (e) {
  e.preventDefault()
  switch (e.keyCode) {
    // player one
    case 18: // alt
      supporA = true;
    break;
    case 39: //right key
      if(supporA){
        playerOne.header.turnRight();      
      } else {
        playerOne.turnRight();
      }
    break;
    case 37: //left key
      if(supporA){
        playerOne.header.turnLeft();      
      } else {
        playerOne.turnLeft();
      }
    break;
    case 38: //Up key
      newPosA = true  
    break;
    case 40: //down key
      playerOne.header.shot();  
    break;    
    
    // Player two
    case 70: // F
      supporB = true;
    break;
    case 68: //D
      if(supporB){
        playerTwo.header.turnRight();      
      } else {
        playerTwo.turnRight();
      }
    break;
    case 65: //A key
      if(supporB){
        playerTwo.header.turnLeft();      
      } else {
        playerTwo.turnLeft();
      }
    break;
    case 87: //W key
      newPosB = true      
    break;
    case 83: //s key
      playerTwo.header.shot();  
    break;    
  }
  if(newPosB)
    playerTwo.newPos();      
  if(newPosA)
    playerOne.newPos();    
}
document.onkeyup = function keyUp (e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 18: //logs
      supporA = false
    break;
    case 70: 
      supporB = false
    break;
    case 38: 
      newPosA = false
    break;
    case 87: 
      newPosB = false
    break;
  }
}

export {keyActions, keyUp}