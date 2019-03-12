// import {game} from '../main.js';

// This should be in other fucking file

let keyActions;
let keyUp;

let supporA = false
let supporB = false

let newPosA = false
let newPosB = false

let turnLeftA = false
let turnRightA = false

let turnLeftB = false
let turnRightB = false

let timeA = false
let timeB = false

// we will create the canvas onece it is loaded. 
document.onkeydown = function keyActions (e) {
  e.preventDefault()
  switch (e.keyCode) {
    // player one
    case 18: // alt
      supporA = true;
    break;
    case 39: //right key
      turnRightA = true
    break;
    case 37: //left key
      turnLeftA = true
    break;
    case 38: //Up key
      newPosA = true  
    break;
    case 40: //down key
      timeA = true
    break;    
    
    // Player two
    case 70: // F
      supporB = true;
    break;
    case 68: //D
      turnRightB = true
    break;
    case 65: //A key
      turnLeftB = true;
    break;
    case 87: //W key
      newPosB = true      
    break;
    case 83: //s key
      timeB = true
    break;    
  }
  if(newPosB)
    window.players[1].newPos();      
  if(newPosA)
    window.players[0].newPos();    
  
  if(turnRightA) {
    if(supporA){
      window.players[0].header.turnRight();      
    } else {
      window.players[0].turnRight();
    }
  }
  if(turnLeftA){
    if(supporA){
      window.players[0].header.turnLeft();      
    } else {
      window.players[0].turnLeft();
    }
  }
  if(turnRightB) {
    if(supporB){
      window.players[1].header.turnRight();      
    } else {
      window.players[1].turnRight();
    }
  }
  if(turnLeftB) {
    if(supporB){
      window.players[1].header.turnLeft();      
    } else {
      window.players[1].turnLeft();
    }
  }
  if(timeA)
    window.players[0].header.shot();  
  if(timeB)
    window.players[1].header.shot();  

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
    case 39: 
      turnRightA = false
    break;
    case 37: 
      turnLeftA = false
    break;
    case 68: //D
      turnRightB = false
    break;
    case 65: //A key
      turnLeftB = false
    break;
    case 40: //down key
      timeA = false
    break;   
    case 83: //s key
      timeB = false
    break;    
  }
}
export {keyActions, keyUp}