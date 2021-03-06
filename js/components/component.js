import {canvas} from '../canvas.js';

function Component(width, height, img, x, y, degree = 90) {
  // Image properties
  this.img = img;
  this.imageComp = new Image();
  this.imageComp.src = './assets/images/' + this.img;
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
  
  this.crash = false
  
  // Current Position -> this should be in a function??
  this.left   = function() { return this.x };
  this.right  = function() { return (this.x + this.width) };
  this.top    = function() { return this.y };
  this.bottom = function() { return (this.y + this.height) };
  this.imgBoom = new Image()
  this.imgBoom.src = './assets/images/explosion/explosion2.png'
}

Component.prototype.impact = function () { 
  canvas.context.drawImage(this.imgBoom, this.x, this.y, 50, 50);
  this.crash = !this.crash //lo pasamos a falso otra vez. 
}

Component.prototype.debbug = function (stop = false) {  
  console.log(this)
  if(stop)
    debugger
}

export {Component};