import {key} from './constantKey.js'

let keyActions;
let keyUp;


let newPosA = false
let newPosB = false

let turnLeftA = false
let turnRightA = false

let turnHeadLeftA = false
let turnHeadRightA = false


let turnLeftB = false
let turnRightB = false


let turnHeadLeftB = false
let turnHeadRightB = false

let timeA
let timeB
let shotA
let shotB
// we will create the canvas onece it is loaded. 
document.onkeydown = function keyActions (e) {
  e.preventDefault()
  console.log(e.keyCode, e)
  switch (e.keyCode) {
    // player one
    case key.turnRightA: //right key
      turnRightA = true
    break;
    case key.turnLeftA: //left key
      turnLeftA = true
    break;
    case key.turnHeadRightA: //right key
      turnHeadRightA = true
    break;
    case key.turnHeadLeftA: //left key
      turnHeadLeftA = true
    break;
    case key.newPosA: //Up key
      newPosA = true  
    break;
    case key.shotA: //down key
        shotA = true
        if(!timeA){ 
          if(shotA)
            window.players[0].header.shot();  
          timeA = setTimeout(_=> timeA = undefined, 800)
        }
    break;    
    
    // Player two
    case key.turnHeadRightB: //D
      turnHeadRightB = true
    break;
    case key.turnHeadLeftB: //A key
      turnHeadLeftB = true;
    break;

    case key.turnRightB: //D
      turnRightB = true
    break;
    case key.turnLeftB: //A key
      turnLeftB = true;
    break;
    case key.newPosB: //W key
      newPosB = true      
    break;
    case key.shotB: //s key
        shotB = true
        if(!timeB){ 
          if(shotB)
            window.players[1].header.shot();  
          timeB = setTimeout(_=> timeB = undefined, 800)
        }
    break;    
  }
  if(newPosB)
    window.players[1].newPos();      
  if(newPosA)
    window.players[0].newPos();    
  
  if(turnRightA)
    window.players[0].turnRight();
      
  if(turnLeftA)
    window.players[0].turnLeft();
  
  if(turnHeadLeftA)
    window.players[0].header.turnLeft();      
  if(turnHeadRightA)
    window.players[0].header.turnRight();      


  if(turnRightB)
    window.players[1].turnRight();
  if(turnLeftB) 
    window.players[1].turnLeft();

  if(turnHeadLeftB)
      window.players[1].header.turnLeft();      
  if(turnHeadRightB)
      window.players[1].header.turnRight();      



}

document.onkeyup = function keyUp (e) {
  e.preventDefault();
  switch (e.keyCode) {
    case key.newPosA: 
      newPosA = false
    break;
    case key.newPosB: 
      newPosB = false
    break;
    case key.turnRightA: 
      turnRightA = false
    break;
    case key.turnLeftA: 
      turnLeftA = false
    break;
    case key.turnRightB: //D
      turnRightB = false
    break;
    case key.turnLeftB: //A key
      turnLeftB = false
    break;
    case key.timeA: //down key
      timeA = false
    break;   
    case key.timeB: //s key
      timeB = false
    break;    
// header
    case key.turnHeadLeftA: //D
      turnHeadLeftA = false
    break;
    case key.turnHeadRightA: //A key
      turnHeadRightA = false
    break;
    case key.turnHeadLeftB: //down key
      turnHeadLeftB = false
    break;   
    case key.turnHeadRightB: //s key
      turnHeadRightB = false
    break;    

  }
}
export {keyActions, keyUp}