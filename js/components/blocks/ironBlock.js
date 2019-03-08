import {Block} from './block.js';

ironBlock.prototype = Object.create(Block.prototype);
function ironBlock (x, y){
  Block.call(this, x, y)
  this.transY = 50
  this.lifes = 9
}



export {ironBlock}