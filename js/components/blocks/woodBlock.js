import {Block} from './block.js';

class woodBlock extends Block {
  constructor(x, y){
    super(x, y)
    this.imgArr = ['w1.png', 'w2.png', 'w3.png', 'w4.png']  
    // this.img = 'boxes/' + this.imgArr[0];
    this.lifes = this.imgArr.length;
  }
}
export {woodBlock}