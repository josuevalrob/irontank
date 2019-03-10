import {playerOne, playerTwo} from '../main.js';

let keyActions;
let keyUp;
let supporA = false;
  // we will create the canvas onece it is loaded. 
document.onkeydown = function keyActions (e) {
  e.preventDefault()
  switch (e.keyCode) {
    // player one
    case 18: // alt
      supporA = true;
      console.log(supporA)
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
      playerOne.newPos();      
    break;
    case 40: //down key
      playerOne.header.shot();  
    break;    
    
    // Player two
    case 70: // F
      supporA = true;
      console.log(supporA)
    break;
    case 68: //D
      if(supporA){
        playerTwo.header.turnRight();      
      } else {
        playerTwo.turnRight();
      }
    break;
    case 65: //A key
      if(supporA){
        playerTwo.header.turnLeft();      
      } else {
        playerTwo.turnLeft();
      }
    break;
    case 87: //W key
      playerTwo.newPos();      
    break;
    case 83: //s key
      playerTwo.header.shot();  
    break;    
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