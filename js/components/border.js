import {Static} from './static.js'
import {canvas} from '../canvas.js';

Border.prototype = Object.create(Static.prototype);
function Border (){
  // this.currentImage = 0; //repetitive code
  this.imgArr = ['di.png', 'ds.png', 'ii.png', 'is.png', 'inf.png', 'ld.png', 'li.png', 'sup.png']
  let img = './back/' + this.imgArr[this.currentImage]
  let width = 50
  let height = 50
  let x = 0
  let y = 0
  Static.call(this, width, height, img, x, y)
  this.screenWidth = window.innerWidth
  this.screenHeight = window.innerHeight
}
Border.prototype.update = function (){
  let ctx = canvas.context

  this.Up(ctx)
  this.Down(ctx)
  this.Right(ctx) 
  this.Left(ctx)   
}

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
 }
 Border.prototype.Right = function (ctx) { 
  //  This border sucks! 
  let newImage = new Image()
      newImage.src = '../assets/images/back/right.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.screenWidth - 10, 25, 25 ,this.screenHeight - this.height);
 }
export {Border};