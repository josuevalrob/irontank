import {Dinamic} from '../dinamic.js';
import {objects, objectsKeys} from '../../helpers/randomMap.js';
import {players} from '../../main.js'

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
  
  // Tank destruction
  players.some((e, i) => {
    if(this.crashWith(e)){
      e.lifes -- //This should be function in the tank.       
      if (e.lifes == 0)
        players.splice(i, 1)
    }
  })
  
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