import {canvas} from './canvas.js';

function Component(width, height, img, x, y) {
  this.imageComp = new Image();
  this.imageComp.src = '../assets/images/' + img;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;  
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