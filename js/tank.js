import {Dinamic} from './dinamic.js';
import {Bullet} from './bullet.js';
import {canvas} from './canvas.js';
import {objects, objectsKeys} from './randomMap.js';
//Copying prototypes from Dinamic
Tank.prototype = Object.create(Dinamic.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Dinamic.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullet = undefined;
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
  canvas.clear();

}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
  canvas.clear();
}
let bulletTime
Tank.prototype.shot = function() {
  this.myBullet = new Bullet(30, 7, 'bullet.png', this.x, this.y, this.degree);
    bulletTime = setInterval(()=>{
      this.myBullet.speed -= 6
      this.myBullet.newPos();
      
      // stop the bullet
      objectsKeys.forEach( e => {
        objects[e].some(o => {
          if(this.myBullet != undefined && this.myBullet.crashWith(o))
            this.stopBullet()
        })    
      })

      // Reduce the bullet speed
      //{...}      

      // Explote! 
      // {...}

      // stop the cicle
      if(this.myBullet != undefined && this.myBullet.speed < 1)
        this.stopBullet() 
    }, 50);   
}

Tank.prototype.stopBullet = function (){
  clearInterval(bulletTime);
  this.myBullet = undefined;
}

export {Tank}