import {Dinamic} from '../dinamic.js';
import {Bullet} from './bullet.js';
import {HeaderTank} from './headerTank.js'
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (x, y, rotX, rotY, degree){
  let img = 'tank/body.png'
  let width = 50
  let height = 48
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullet = undefined;
  this.header = new HeaderTank(this.x, this.y, this.degree)

}
Tank.prototype.turnRight = function(){ 
  this.degree += 90;
  this.header.degree = this.degree
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 90;
  this.header.degree = this.degree
}

Tank.prototype.shot = function() {
  if(!this.myBullet){
    this.myBullet = new Bullet(this.x, this.y, this.degree);
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

Tank.prototype.paint = function() {
  // this.update()
  this.header.paint(this.x, this.y, this.header.degree)
}

// Border limit

export {Tank}