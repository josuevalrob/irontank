import {Static} from '../static.js'
import {canvas} from '../../canvas.js';

Block.prototype = Object.create(Static.prototype);
function Block (x, y){
  let width = 50;
  let height = 50;
  this.currentImage = 0  
  this.lifes = 0;
  let img = 'boxes/' + this.imgArr[0];
  Static.call(this, width, height, img, x, y)
}
Block.prototype.update = function (){
  let ctx = canvas.context
  ctx.drawImage(this.imageComp, this.x,this.y,this.width, this.height);
  ctx.restore()
}

Block.prototype.destroy = function () {
    this.lifes -= 1
    this.currentImage += 1
    this.img = 'boxes/' + this.imgArr[this.currentImage];
    if (this.lifes > 1)
      this.imageComp.src = '../assets/images/' + this.img;
}
export {Block};