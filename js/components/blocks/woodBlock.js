import {Block} from './block.js';

class woodBlock extends Block {
  constructor(x, y){
    console.log(x, y)
    let imgArr = ['w1.png', 'w2.png', 'w3.png', 'w4.png']  
    let img = 'boxes/' + imgArr[0];
    super(img, x, y)
    this.lifes = imgArr.length;
  }
}
export {woodBlock}