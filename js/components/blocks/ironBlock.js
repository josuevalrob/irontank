import {Block} from './block.js';

ironBlock.prototype = Object.create(Block.prototype);
function ironBlock (x, y){
  this.imgArr = ['i1.png', 'i2.png', 'i3.png', 'i4.png', 'i5.png', 'i6.png', 'i7.png', 'i8.png', 'i9.png']
  Block.call(this, x, y)
  this.lifes = 9
}



export {ironBlock}