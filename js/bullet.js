import {Component} from './component.js';
import {Tank} from './tank.js';
// A bullet is an object from the tank. 
Bullet.prototype = Object.create(Component.prototype); 

function Bullet (width, height, img, x, y, degree) {
  Component.call(this, width, height, img, x, y, degree) 

}

Bullet.prototype.debbug = function () {
  console.log(this)
}

export {Bullet};