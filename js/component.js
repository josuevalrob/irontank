import {canvas} from './canvas.js';

function Component(width, height, img, x, y, degree = 0) {
  // Image properties
  this.imageComp = new Image();
  this.imageComp.src = '../assets/images/' + img;
  // Size property
  this.width = width;
  this.height = height;
  // Position properties
  this.x = x;
  this.y = y;  
  // rotation properties
  this.rotX = this.width / -2;
  this.rotY = this.height / -2;
  this.degree = degree; //'N' => 270 'S' => 90, 'W' => 180 'E' => 0  
}

Component.prototype.update = function (){
  canvas.context.drawImage(
    this.imageComp, 
    this.x, 
    this.y, 
    this.width, 
    this.height);
}

export {Component};