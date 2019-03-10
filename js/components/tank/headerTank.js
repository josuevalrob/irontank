import {Dinamic} from '../dinamic.js';
import {Bullet} from './bullet.js';

// Okey, this get heavy now. 
HeaderTank.prototype = Object.create(Dinamic.prototype);

function HeaderTank (x, y, img, degree){
  img = 'tank/' + img
  let width = 50
  let height = 15
  Dinamic.call(this, width, height, img, x, y, degree)
  this.myBullet = undefined;
}

HeaderTank.prototype.paint = function(x, y, dgr) {
  this.x = x
  this.y = y
  this.degree = dgr
  // change the center point
  this.rotX = this.width / -5;
  this.rotY = this.height / -2;
  this.update()
}
HeaderTank.prototype.turnRight = function(){ 
  this.degree += 5;  
}
HeaderTank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}
HeaderTank.prototype.shot = function() {
  if(!this.myBullet){
    this.myBullet = new Bullet(this.x, this.y, this.degree);
    this.myBullet.stopBullet(); //bullet go => true!
    this.shooting();
  }       
}
HeaderTank.prototype.shooting = function() {
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

export {HeaderTank}