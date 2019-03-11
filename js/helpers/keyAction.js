import {game} from '../main.js';

// This should be in other fucking file

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
        game.players[0].header.turnRight();      
      } else {
        game.players[0].turnRight();
      }
    break;
    case 37: //left key
      if(supporA){
        game.players[0].header.turnLeft();      
      } else {
        game.players[0].turnLeft();
      }
    break;
    case 38: //Up key
      newPosA = true  
    break;
    case 40: //down key
      game.players[0].header.shot();  
    break;    
    
    // Player two
    case 70: // F
      supporB = true;
    break;
    case 68: //D
      if(supporB){
        game.players[1].header.turnRight();      
      } else {
        game.players[1].turnRight();
      }
    break;
    case 65: //A key
      if(supporB){
        game.players[1].header.turnLeft();      
      } else {
        game.players[1].turnLeft();
      }
    break;
    case 87: //W key
      newPosB = true      
    break;
    case 83: //s key
      game.players[1].header.shot();  
    break;    
  }
  if(newPosB)
    game.players[1].newPos();      
  if(newPosA)
    game.players[0].newPos();    
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