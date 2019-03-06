import {Tank} from './tank.js';
// A bullet is an object from the tank. 
// Maybe it should be inharance from the tank, and not from the components. 
// it has two functions from the tank, like update and newPos. 
// And this functionalities are not from Components, cuz them involve the movement of an object. 
// and right now, the only object that moves are tank and bullets. 


Bullet.prototype = Object.create(Tank.prototype); 

function Bullet (width, height, img, x, y, degree) {
  Tank.call(this, width, height, img, x, y, degree) 
  this.speed = 10;
}
export {Bullet};