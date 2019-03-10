import {Static} from './static.js'
import {canvas} from '../canvas.js';

Border.prototype = Object.create(Static.prototype);
function Border (){
  // this.currentImage = 0; //repetitive code
  this.imgArr = ['di.png', 'ds.png', 'ii.png', 'is.png', 'inf.png', 'ld.png', 'li.png', 'sup.png']
  let img = 'back/' + this.imgArr[this.currentImage]
  let width = 50
  let height = 50
  let x = 0
  let y = 0
  Static.call(this, width, height, img, x, y)
  // I need the width from the canvas
  this.screenWidth = window.innerWidth
  this.screenHeight = window.innerHeight
}
Border.prototype.update = function (){
  let ctx = canvas.context
  // let newImage = new Image()
  // newImage.src = '../assets/images/back/ds.png';
  // this.rightUp(ctx, newImage)
  // newImage = new Image()
  // newImage.src = '../assets/images/back/di.png';
  // this.rightDown(ctx, newImage)
  // newImage = new Image()
  // newImage.src = '../assets/images/back/is.png';
  // this.leftUp(ctx, newImage)
  // newImage = new Image()
  // newImage.src = '../assets/images/back/ii.png';
  // this.leftDown(ctx, newImage)

  this.Up(ctx)
  this.Down(ctx)
  this.Right(ctx) 
  this.Left(ctx)   
  // this should be a constructor. fuck!!
}

// Border.prototype.rightUp = function (ctx, newImage) { 
//   ctx.drawImage(newImage, this.screenWidth - this.width, this.y, this.width, this.height);
// }

//  Border.prototype.rightDown = function (ctx, newImage) {
//   ctx.drawImage(newImage, this.screenWidth - this.width, this.screenHeight - this.height, this.width, this.height);
//  }
// Border.prototype.leftUp = function (ctx, newImage) { 
//   ctx.drawImage(newImage, this.x, this.y, this.width, this.height);
//  }

//  Border.prototype.leftDown = function (ctx, newImage) {
//   ctx.drawImage(newImage, this.x, this.screenHeight - this.height, this.width, this.height);
//  }

Border.prototype.Up = function (ctx) { 
  let newImage = new Image()
      newImage.src = '../assets/images/back/sup.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.x, this.y, this.screenWidth, this.height - 23);
 }
Border.prototype.Down = function (ctx) { 
  let newImage = new Image()
      newImage.src = '../assets/images/back/sup.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.x, this.screenHeight - 25, this.screenWidth, this.height );
 }
 Border.prototype.Left = function (ctx) { 
  let newImage = new Image()
      newImage.src = '../assets/images/back/left.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(0, 25, 17, this.screenHeight - (this.height ));
  // ctx.strokeRect(this.screenWidth - this.width, this.width, this.width ,this.screenHeight - (this.height * 2));
 }
 Border.prototype.Right = function (ctx) { 
  //  This border sucks! 
  let newImage = new Image()
      newImage.src = '../assets/images/back/right.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.screenWidth - 10, 25, 25 ,this.screenHeight - this.height);
  // ctx.strokeRect(this.screenWidth - this.width, this.width, this.width ,this.screenHeight - (this.height * 2));
 }
export {Border};