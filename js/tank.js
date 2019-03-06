import {Dinamic} from './dinamic.js';
import {Bullet} from './bullet.js';
import {canvas} from './canvas.js';

//Copying prototypes from Dinamic
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullets = [];
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
  canvas.clear();

}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
  canvas.clear();
}

Tank.prototype.shot = function() {
  this.myBullets.push(new Bullet(30, 7, 'bullet.png', this.x, this.y, this.degree));
  this.myBullets.forEach(e => {
    let bulletTime = setInterval(()=>{
      e.speed -= 1
      e.newPos();
      clearInterval(e.speed < 1 ? bulletTime : undefined);
    }, 5);
  })
  if(this.myBullets.length > 1)
    this.myBullets.shift()
  setTimeout(()=>{
    this.myBullets = []
  }, 200 )
}

export {Tank}