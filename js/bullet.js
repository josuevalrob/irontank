import {canvas} from './canvas.js';

import {Dinamic} from './dinamic.js';
// A bullet is an object from the tank. 
// Maybe it should be inharance from the tank, and not from the components. 
// it has two functions from the tank, like update and newPos. 
// And this functionalities are not from Components, cuz them involve the movement of an object. 
// and right now, the only object that moves are tank and bullets. 


Bullet.prototype = Object.create(Dinamic.prototype); 

function Bullet (width, height, img, x, y, rotX, rotY, degree, speed){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree)
  this.speed = speed || 100;
}


export {Bullet};