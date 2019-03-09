import {Component} from './component.js';
import {objects, objectsKeys} from '../helpers/randomMap.js';

import {canvas} from '../canvas.js';
Dinamic.prototype = Object.create(Component.prototype); 

function Dinamic (width, height, img, x, y, rotX, rotY, degree){
  Component.call(this, width, height, img, x, y, rotX, rotY, degree);
// Current Position -> this should be in a function??
  this.a = this.x
  this.b = this.y
  this.left   = function() { return this.a + this.rotX };
  this.right  = function() { return (this.a + this.rotX + this.width) };
  this.top    = function() { return this.b + this.rotY };
  this.bottom = function() { return (this.b + this.rotY + this.height) };
}

Dinamic.prototype.update = function () {  
  canvas.context.save();
  // canvas.context.strokeRect(this.a + this.rotX, this.y + this.rotY, this.width, this.height);
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}

Dinamic.prototype.newPos = function() {
  this.x += this.speed * Math.cos(this.degree * Math.PI/180);
  this.y += this.speed * Math.sin(this.degree * Math.PI/180);
  this.a = this.x //+  (Math.sin(this.degree) * Math.hypot(this.rotX, this.rotY)) + (Math.cos(this.degree) * Math.hypot(this.rotX, this.rotY))
  this.b = this.y //+ (Math.sin(this.degree) * Math.hypot(this.rotX, this.rotY)) + (Math.cos(this.degree) * Math.hypot(this.rotX, this.rotY))
  objectsKeys.forEach( e => {
    objects[e].some(o => {
      if(this.crashWith(o))
        this.stop()
    })    
  })
}

Dinamic.prototype.crashWith = function (obstacle) {
  // console.log(this.bottom(), this.top(), this.right(), this.left(), this.a, this.b)
  return !((this.bottom() < obstacle.top())   ||
          (this.top()    > obstacle.bottom()) ||
          (this.right()  < obstacle.left())   ||
          (this.left()   > obstacle.right()))
}



Dinamic.prototype.stop = function () {
  debugger
  this.x = this.x;
  this.y = this.y;
}

export {Dinamic};