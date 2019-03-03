import {Component} from './component.js';
import {canvas} from './canvas.js';

//Copying prototypes from Component
Tank.prototype = Object.create(Component.prototype); 

function Tank (width, height, img, x, y){
  Component.call(this, width, height, img, x, y);
  this.speed = 0;
  this.rotX = this.width / -2;
  this.rotY = this.height / -2;
  this.degree = 0; //'N' => 270 'S' => 90, 'W' => 180 'E' => 0  
}
Tank.prototype.turn = function(T){ //T => 39: Right || 37: left;
  switch (this.degree) {
    case 90:
      this.degree = T == 39 ? 180 : 0 ;
    break;
    case 270:
      this.degree = T == 39 ? 0 : 180 ;
    break;
    case 180:
      this.degree = T == 39 ? 270 : 90 ;
    break;
    case 0:
      this.degree = T == 39 ? 90 : 270 ;
    break;
  }
  console.log(this.degree)
}

Tank.prototype.update = function () {
  canvas.context.save();
  canvas.context.translate(this.x, this.y);        
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(
      this.imageComp, 
      this.rotX , 
      this.rotY, 
      this.width, 
      this.height);

  canvas.context.restore(); 
}

Tank.prototype.newPos = function(step) {
  this.speed = step;
switch (this.degree) {
    case 90: //South
      this.y += this.speed;
    break;
    case 270: // North
      this.y -= this.speed;
    break;
    case 180: //West
      this.x -= this.speed;
    break;
    case 0: //East
      this.x += this.speed;
      console.log(this.x)
    break;
  }
}

Tank.prototype.stopMove = function(){
  debugger
  this.speed = 0;
}


export {Tank}