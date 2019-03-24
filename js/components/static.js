import {Component} from './component.js';
import {canvas} from '../canvas.js';

class Static extends Component {
  constructor(width, height, img, x, y) {
    super(this, width, height, img, x, y)
  }
  update (){
    canvas.context.drawImage(this.imageComp, this.x, this.y, this.width, this.height);
    if(this.crash)
      this.impact()
  }
}

export {Static}