import {Dinamic} from './dinamic.js';
import {Bullet} from './bullet.js';
import {canvas} from './canvas.js';

//Copying prototypes from Dinamic
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullet = undefined;
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
  this.myBullet = new Bullet(30, 7, 'bullet.png', this.x, this.y, this.degree);
  let bulletTime = setInterval(()=>{
    this.myBullet.speed -= 6
    this.myBullet.newPos();
    if(this.myBullet.speed < 1){
      clearInterval(bulletTime);
      this.myBullet = undefined;
    }
  }, 50); 
}

export {Tank}