import {Dinamic} from './dinamic.js';
import {Bullet} from './bullet.js';

//Copying prototypes from Dinamic
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullets = [];
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}

Tank.prototype.shot = function() {
  this.myBullets.push(new Bullet(54, 12, 'bullet.png', this.x + 50, this.y + 50, this.degree));
  console.log(this.myBullets)
}

export {Tank}