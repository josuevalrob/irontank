import {Dinamic} from '../dinamic.js';
import {Bullet} from './bullet.js';

// Okey, this get heavy now. 
HeaderTank.prototype = Object.create(Dinamic.prototype);

function HeaderTank (x, y, img, degree){
  img = 'tank/' + img
  let width = 50
  let height = 15
  Dinamic.call(this, width, height, img, x, y, degree)
  this.rotX = this.width / -5; //Center point
  this.myBullet = undefined
  this.fire = undefined  
}

HeaderTank.prototype.paint = function(x, y, dgr) {
  this.x = x //New location
  this.y = y
  this.degree = dgr //New degree
  this.update() //Painting the header
  if(this.myBullet != undefined){ //paint the bullet
    this.myBullet.update()
    this.fire.update()
  }
}
HeaderTank.prototype.turnRight = function(){ 
  this.degree += 5;  
}
HeaderTank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}
HeaderTank.prototype.shot = function() {
  if(!this.myBullet){  //Only if we dont have a bullet.  
    let fromX = this.width * Math.cos(this.degree * Math.PI/180)
    let fromY = this.width * Math.sin(this.degree * Math.PI/180)

    this.myBullet = new Bullet('bullet.png', this.x + fromX, this.y + fromY, this.degree, 100);    
    this.myBullet.stopBullet(); //bullet go => true!
    this.shooting();

    this.fire = new Bullet('fire.png', this.x + fromX, this.y + fromY, this.degree, 0);
  //   debugger
  // } else {
  //   return
  }
}
HeaderTank.prototype.shooting = function() {
  if(this.myBullet.bulletGo) {    
    this.myBullet.speed -= 8
    this.myBullet.newPos()  
    if(this.myBullet !=undefined && this.myBullet.speed > 0) {
      requestAnimationFrame(this.shooting.bind(this));
    } else {
      this.myBullet.stopBullet();
      this.myBullet = undefined;
    }
  }
}   

export {HeaderTank}