import {Component} from './component.js';
import {canvas} from './canvas.js';
import {Bullet} from './bullet.js';

//Copying prototypes from Component
Tank.prototype = Object.create(Component.prototype); 

function Tank (width, height, img, x, y, rotX, rotY, degree){
  Component.call(this, width, height, img, x, y, rotX, rotY, degree);
  this.speed = 3;
  this.myBullets = [];
}
Tank.prototype.turnRight = function(){ 
  this.degree += 5;
}
Tank.prototype.turnLeft = function(){ 
  this.degree -= 5;
}

Tank.prototype.update = function () {
  canvas.context.save();
  canvas.context.translate(this.x, this.y); 
  canvas.context.rotate(this.degree * (Math.PI / 180));
  canvas.context.drawImage(this.imageComp, this.rotX , this.rotY, this.width, this.height);
  canvas.context.restore(); 
}

Tank.prototype.newPos = function() {
  this.y += this.speed * Math.sin(this.degree * Math.PI/180);
  this.x += this.speed * Math.cos(this.degree * Math.PI/180);
}

Tank.prototype.stopMove = function(){
  this.speed = 0;
}

Tank.prototype.shot = function() {
  this.myBullets.push(new Bullet(54, 12, 'bullet.png', this.x, this.y, this.degree));
  this.myBullets[0].debbug();
}

export {Tank}