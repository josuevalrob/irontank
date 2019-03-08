import {Block} from './block.js';

woodBlock.prototype = Object.create(Block.prototype);
function woodBlock (x, y){
  this.imgArr = ['w1.png', 'w2.png', 'w3.png', 'w4.png']  
  Block.call(this, x, y)
  this.lifes = 4;
}
export {woodBlock}