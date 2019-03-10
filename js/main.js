import {canvas} from './canvas.js';
import {Tank} from './components/tank/tank.js';
import {randomMap, objects, objectsKeys} from './helpers/randomMap.js'
// import * as keys from './helpers/keyAction.js' //I dont know how the fuck this works

let players = []
function startGame(){
    randomMap();
    canvas.start();
    // players.push(new Tank(window.innerWidth - 200, innerHeight - 100, 'body.png', 'head.png' , 180))
    players.push(new Tank(400, 100, 'body.png', 'head.png' , 180))
    players.push(new Tank(200, 100, 'body2.png', 'head2.png' , 0))
}

function updateGame (){
  if(canvas.pause)  {
    canvas.clear()
    canvas.bkgDraw() 
    
    players.forEach(e => {
      if(e != undefined)
        e.paint()
      if(e.header.myBullet != undefined)
        e.header.myBullet.update()
    })

    objectsKeys.forEach( e => {
      objects[e].forEach((_, i) => {
        if(objects[e][i] != undefined){
          objects[e][i].update()
        }
      })
    })

    requestAnimationFrame(updateGame);   
  }   
}
document.addEventListener('DOMContentLoaded', function () {
  startGame();
})

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
        players[0].header.turnRight();      
      } else {
        players[0].turnRight();
      }
    break;
    case 37: //left key
      if(supporA){
        players[0].header.turnLeft();      
      } else {
        players[0].turnLeft();
      }
    break;
    case 38: //Up key
      newPosA = true  
    break;
    case 40: //down key
      players[0].header.shot();  
    break;    
    
    // Player two
    case 70: // F
      supporB = true;
    break;
    case 68: //D
      if(supporB){
        players[1].header.turnRight();      
      } else {
        players[1].turnRight();
      }
    break;
    case 65: //A key
      if(supporB){
        players[1].header.turnLeft();      
      } else {
        players[1].turnLeft();
      }
    break;
    case 87: //W key
      newPosB = true      
    break;
    case 83: //s key
      players[1].header.shot();  
    break;    
  }
  if(newPosB)
    players[1].newPos();      
  if(newPosA)
    players[0].newPos();    
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

// export {keyActions, keyUp}
export {updateGame, objects, players};