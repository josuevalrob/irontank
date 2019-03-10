import {Dinamic} from '../dinamic.js';
import {HeaderTank} from './headerTank.js'

Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (x, y, img, imgHead, degree){
  img = 'tank/' + img
  let width = 50
  let height = 48
  Dinamic.call(this, width, height, img, x, y, degree);
  this.speed = 3;
  this.imgHead = imgHead
  this.header = new HeaderTank(this.x, this.y, this.imgHead, this.degree)
}
Tank.prototype.paint = function() {
  this.update()
  this.header.paint(this.x, this.y, this.header.degree)
}

Tank.prototype.turnRight = function(){ 
  this.degree += 90;
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 90;
}

export {Tank}