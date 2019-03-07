import {Static} from './static.js'
import {canvas} from './canvas.js';

Block.prototype = Object.create(Static.prototype);
function Block (x, y){
  let img = 'boxes.png';
  // Size property
  let width = 50;
  let height = 50;
  Static.call(this, width, height, img, x, y)  
  this.transX = 0
  this.transY = 0
  this.lifes = 0;
}
Block.prototype.update = function (){
  let ctx = canvas.context
// Create the mask
  ctx.save()
  ctx.rect(this.x, this.y, this.width, this.height)
  ctx.clip()
  ctx.fillStyle = "red";
  ctx.drawImage(
    this.imageComp, 
    this.x - this.transX, 
    this.y, // - 50, 
    450, 
    100);
  ctx.restore()

}

Block.prototype.destroy = function () {
    this.transX += 50;
    this.lifes += 1
}

// Paint the image

// move the image according to state change


export {Block};