import {canvas} from './canvas.js';
import {Tank} from './tank.js';

// import {Bullet} from './bullet.js';
  let tank;
  tank = new Tank(100, 50, 'tank.png', 100, 100)
// let bullet
// bullet = new Bullet(35, 7, 'bullet.png', 100, 100)


function startGame(){
  canvas.start();
}


function updateGame (){
  canvas.bkgDraw() //this should be here?? really??
  tank.update();
  if(tank.myBullet != undefined){
    tank.myBullet.update();
  }
  requestAnimationFrame(updateGame);      
}



document.addEventListener('DOMContentLoaded', function () {
  // we will create the canvas onece it is loaded. 
  startGame();
document.onkeydown = function(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 39: //right key
      tank.turnRight();
    break;
    case 37: //left key
      tank.turnLeft();
    break;
    case 38: //Up key
      tank.newPos();      
    break;
    case 40: //down key
      tank.shot();  
    break;
  }
}
})


export {updateGame};