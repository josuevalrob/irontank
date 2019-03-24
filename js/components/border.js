import {Static} from './static.js'
import {canvas} from '../canvas.js';

class Border extends Static {
  constructor(){
    let width = 50
    let height = 50
    let x = 0
    let y = 0
    super(width, height, x, y)
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
  }
  update (){
    let ctx = canvas.context
    this.Up(ctx)
    this.Down(ctx)
    this.Right(ctx) 
    this.Left(ctx)   
  }

  Up (ctx) { 
    let newImage = new Image()
        newImage.src = './assets/images/back/sup.png'
    let borderPtrn = ctx.createPattern(newImage, 'repeat')
    ctx.fillStyle= borderPtrn;  
    ctx.fillRect(this.x, 0, this.screenWidth, this.height - 23);
  }
  Down (ctx) { 
    let newImage = new Image()
        newImage.src = './assets/images/back/sup.png'
    let borderPtrn = ctx.createPattern(newImage, 'repeat')
    ctx.fillStyle= borderPtrn;  
    ctx.fillRect(this.x, this.screenHeight - 25, this.screenWidth, this.height );
  }
  Left (ctx) { 
    let newImage = new Image()
        newImage.src = './assets/images/back/left.png'
    let borderPtrn = ctx.createPattern(newImage, 'repeat')
    ctx.fillStyle= borderPtrn;  
    ctx.fillRect(0, 25, 17, this.screenHeight - (this.height ));
  }
  Right (ctx) { 
    //  This border sucks! 
    let newImage = new Image()
        newImage.src = './assets/images/back/right.png'
    let borderPtrn = ctx.createPattern(newImage, 'repeat')
    ctx.fillStyle= borderPtrn;  
    ctx.fillRect(this.screenWidth - 10, 25, 25 ,this.screenHeight - this.height);
  }
}

export {Border};