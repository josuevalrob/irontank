import {Block} from './block.js';

class ironBlock extends Block {
  constructor(x, y){
    let imgArr = ['i1.png', 'i2.png', 'i3.png', 'i4.png', 'i5.png', 'i6.png', 'i7.png', 'i8.png', 'i9.png']
    let img = 'boxes/' + imgArr[0];    
    super(img, x, y)
    this.lifes = imgArr.length;
  }
}

export {ironBlock}