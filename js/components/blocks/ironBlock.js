import {Block} from './block.js';

class ironBlock extends Block {
  constructor(x, y){
    super(x, y)
    this.lifes = this.imgArr.length;
    
    this.imgArr = ['i1.png', 'i2.png', 'i3.png', 'i4.png', 'i5.png', 'i6.png', 'i7.png', 'i8.png', 'i9.png']
    this.img = 'boxes/' + this.imgArr[0];
  }
}

export {ironBlock}