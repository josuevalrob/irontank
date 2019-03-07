import {Dinamic} from './dinamic.js';
import {Bullet} from './bullet.js';
import {canvas} from './canvas.js';
import {objects, objectsKeys} from './randomMap.js';
//Copying prototypes from Dinamic
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullet = undefined;
  // this.bulletGo = false;
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
  //Intentos fortuitos para que el tanque choque
  // this.a = this.x +  (Math.sin(this.degree) * Math.hypot(this.rotX, this.rotY)) + (Math.cos(this.degree) * Math.hypot(this.rotX, this.rotY))
  // this.b = this.y + (Math.sin(this.degree) * Math.hypot(this.rotX, this.rotY)) + (Math.cos(this.degree) * Math.hypot(this.rotX, this.rotY))
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
  // this.a = this.x - this.rotX
  // this.b = this.y - this.rotY
  canvas.clear();
}
// let bulletTime
Tank.prototype.shot = function() {
  if(!this.myBullet){
    this.myBullet = new Bullet(30, 7, 'bullet.png', this.x, this.y, this.degree);
    this.myBullet.stopBullet(); //bullet go => true!
    this.shooting();
  }       
}
Tank.prototype.shooting = function() {
  if(this.myBullet.bulletGo) {
    this.myBullet.speed -= 8
    this.myBullet.newPos()
  
    if(this.myBullet !=undefined && this.myBullet.speed > 1) {
      requestAnimationFrame(this.shooting.bind(this));
    } else {
      this.myBullet.stopBullet();
      this.myBullet = undefined;
    }
  }
}    



export {Tank}