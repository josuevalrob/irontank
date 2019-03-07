import {Component} from './component.js';
import {canvas} from './canvas.js';

//Copying prototypes from Component
Static.prototype = Object.create(Component.prototype); 

function Static (width, height, img, x, y){
  Component.call(this, width, height, img, x, y);
}
Static.prototype.update = function (){
  canvas.context.drawImage(
    this.imageComp, 
    this.x, 
    this.y, 
    this.width, 
    this.height);
  canvas.context.strokeRect(this.x, this.y, this.width, this.height);
}
export {Static}