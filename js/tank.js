import {Component} from './component.js';
import {canvas} from './canvas.js';

//Copying prototypes from Component
Tank.prototype = Object.create(Component.prototype); 

function Tank (width, height, img, x, y){
  Component.call(this, width, height, img, x, y);
  this.speed = 5;
  this.rotX = this.width / -2;
  this.rotY = this.height / -2;
  this.degree = 0; //'N' => 270 'S' => 90, 'W' => 180 'E' => 0  
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}

Tank.prototype.update = function () {
  canvas.context.save();
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}

Tank.prototype.newPos = function() {
      this.y += this.speed * Math.sin(this.degree * Math.PI/180);
      this.x += this.speed * Math.cos(this.degree * Math.PI/180);
}

Tank.prototype.stopMove = function(){
  this.speed = 0;
}

export {Tank}