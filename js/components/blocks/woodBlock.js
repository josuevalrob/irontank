import {Block} from './block.js';

woodBlock.prototype = Object.create(Block.prototype);
function woodBlock (x, y){
  Block.call(this, x, y)
  this.lifes = 4;
}



export {woodBlock}