import {Dinamic} from '../dinamic.js';
import {Bullet} from './bullet.js';

Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (img, x, y, rotX, rotY, degree){
  img = 'tank/' + img
  let width = 50
  let height = 48
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullet = undefined;
  // this.header = new HeadetTank()
}
Tank.prototype.turnRight = function(){ 
  this.degree += 90;
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 90;
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
// Border collition
// Tank.prototype.border = function () {
//   return !(
//     (this.bottom() < Border.height)    ||
//     (this.top()    > obstacle.bottom()) ||
//     (this.right()  < obstacle.left())   ||
//     (this.left()   > obstacle.right())
//   )
// }

export {Tank}