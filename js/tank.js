import {Component} from './component.js';
import {canvas} from './canvas.js';

//Copying prototypes from Component
Tank.prototype = Object.create(Component.prototype); 

function Tank (width, height, img, x, y){
  Component.call(this, width, height, img, x, y);
  // this.speed = 0;
  this.degree = 0; //'N' => 90 'S' => 270, 'W' => 180 'E' => 0  
}
Tank.prototype.turn = function(T){ //T => 39: Right || 37: left;
  switch (this.degree) {
    case 270:
      this.degree = T == 39 ? 180 : 0 ;
    break;
    case 90:
      this.degree = T == 39 ? 0 : 180 ;
    break;
    case 180:
      this.degree = T == 39 ? 90 : 270 ;
    break;
    case 0:
      this.degree = T == 39 ? 270 : 90 ;
    break;
  }
}

Tank.prototype.update = function () {
  canvas.context.save();
  canvas.context.translate(this.x, this.y);        
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.width / -2, this.height / -2, this.width, this.height)
  canvas.context.restore(); 
}
export {Tank}