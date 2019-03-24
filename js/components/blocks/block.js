import {Static} from '../static.js'


class Block extends Static {
  constructor (x, y) {
    let width = 50;
    let height = 50;
    super(width, height, x, y)
    this.currentImage = 0  
    this.lifes = 0;
  }
  destroy () {
    this.lifes -= 1
    this.currentImage += 1
    this.img = 'boxes/' + this.imgArr[this.currentImage];
    if (this.lifes > 0)
      this.imageComp.src = './assets/images/' + this.img;
  }
}
export {Block};