import {Dinamic} from '../dinamic.js';
import {canvas} from '../../canvas.js';

// Okey, this get heavy now. 
HeaderTank.prototype = Object.create(Dinamic.prototype);

function HeaderTank (x, y, degree){
  let img = 'tank/head.png'
  let width = 50
  let height = 25
  Dinamic.call(this, width, height, img, x, y, degree)
}

HeaderTank.prototype.paint = function(x, y, dgr) {
  this.x = x
  this.y = y
  this.degree = dgr
  this.update()
}

HeaderTank.prototype.turnRight = function(){ 
  this.degree += 5;  
  // debugger
}
HeaderTank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}
HeaderTank.prototype.update = function () {  
  canvas.context.save();
  canvas.context.strokeRect(this.a + this.rotX, this.y + this.rotY, this.width, this.height);
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}
export {HeaderTank}