import {Component} from './component.js';
import {canvas} from './canvas.js';
//Copying prototypes from Component
Dinamic.prototype = Object.create(Component.prototype); 

function Dinamic (width, height, img, x, y, rotX, rotY, degree){
  Component.call(this, width, height, img, x, y, rotX, rotY, degree);
}

Dinamic.prototype.update = function () {
  canvas.context.save();
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}

Dinamic.prototype.newPos = function() {
  this.y += this.speed * Math.sin(this.degree * Math.PI/180);
  this.x += this.speed * Math.cos(this.degree * Math.PI/180);
}

export {Dinamic};