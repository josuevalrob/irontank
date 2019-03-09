import {Dinamic} from '../dinamic.js';
import {objects, objectsKeys} from '../../helpers/randomMap.js';

// A bullet is an object from the tank. 
// Maybe it should be inharance from the tank, and not from the components. 
// it has two functions from the tank, like update and newPos. 
// And this functionalities are not from Components, cuz them involve the movement of an object. 
// and right now, the only object that moves are tank and bullets. 


Bullet.prototype = Object.create(Dinamic.prototype); 

function Bullet (x, y, degree, speed){
  let img = 'bullet.png'
  let width = 15
  let height = 15
  Dinamic.call(this, width, height, img, x, y, degree)
  this.speed = speed || 100;
  this.bulletGo = false;
}

Bullet.prototype.newPos = function() {
  this.y += this.speed * Math.sin(this.degree * Math.PI/180);
  this.x += this.speed * Math.cos(this.degree * Math.PI/180);    
  // Blocks destruction
  objects.blocks.some((box, i) => {
    if(this.crashWith(box)){
      this.stopBullet();
      box.destroy()
    }
    if(objects.blocks[i].lifes == 0){
      objects.blocks.splice(i, 1)
    }
  }) 
  //  Trees countdown
  objects.trees.some(tree =>{
    if(this.crashWith(tree)){
      this.speed -= 25
    }
  })
}
Bullet.prototype.stopBullet = function (){
  // clearInterval(bulletTime);
  if(this.bulletGo){
    this.speed = 0;
  }
  this.bulletGo = !this.bulletGo;
}
export {Bullet};