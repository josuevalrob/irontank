import {Component} from './component.js';
import {objects, objectsKeys} from '../helpers/randomMap.js';

import {canvas} from '../canvas.js';
Dinamic.prototype = Object.create(Component.prototype); 

function Dinamic (width, height, img, x, y, rotX, rotY, degree){
  Component.call(this, width, height, img, x, y, rotX, rotY, degree);
// Current Position -> should it be in a prototype??
  this.left   = function() { return this.x + this.rotX };
  this.right  = function() { return (this.x + this.rotX + this.width) };
  this.top    = function() { return this.y + this.rotY };
  this.bottom = function() { return (this.y + this.rotY + this.height) };
}

Dinamic.prototype.update = function () {  
  canvas.context.save();
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}

Dinamic.prototype.newPos = function() {
  this.x += this.speed * Math.cos(this.degree * Math.PI/180);
  this.y += this.speed * Math.sin(this.degree * Math.PI/180);
  
  if (this.isOut()) 
    this.stop()

  objectsKeys.forEach( e => {
    objects[e].some(o => {
      if(this.crashWith(o))
        this.stop()
    })    
  })
}

Dinamic.prototype.crashWith = function (obstacle) {
  return !((this.bottom() < obstacle.top())   ||
          (this.top()    > obstacle.bottom()) ||
          (this.right()  < obstacle.left())   ||
          (this.left()   > obstacle.right()))
}

Dinamic.prototype.isOut = function (){
    return ( this.top() < 30    ||
            this.left() < 30  ||
            this.bottom() > (window.innerHeight - 30) ||
            this.right() > (window.innerWidth - 30)
    ) 
}

Dinamic.prototype.stop = function () {
  this.x -= this.speed * Math.cos(this.degree * Math.PI/180);
  this.y -= this.speed * Math.sin(this.degree * Math.PI/180);
}

export {Dinamic};