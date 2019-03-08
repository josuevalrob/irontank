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
  //draw corner  
  this.rightDown()
  this.rightUp()
  this.leftDown()
  this.leftUp()
  this.Up()
  this.Down()
  this.Right() 
  this.Left()   
  // this should be a constructor. fuck!!
}

Border.prototype.rightUp = function () { 
  let ctx = canvas.context
  let newImage = new Image()
  newImage.src = '../assets/images/back/ds.png';
  ctx.drawImage(newImage, this.screenWidth - this.width, this.y, this.width, this.height);
 }

 Border.prototype.rightDown = function () { 
  let ctx = canvas.context
  let newImage = new Image()
  newImage.src = '../assets/images/back/di.png';
  ctx.drawImage(newImage, this.screenWidth - this.width, this.screenHeight - this.height, this.width, this.height);
 }
Border.prototype.leftUp = function () { 
  let ctx = canvas.context
  let newImage = new Image()
  newImage.src = '../assets/images/back/is.png';
  ctx.drawImage(newImage, this.x, this.y, this.width, this.height);
 }

 Border.prototype.leftDown = function () { 
  let ctx = canvas.context
  let newImage = new Image()
  newImage.src = '../assets/images/back/ii.png';
  ctx.drawImage(newImage, this.x, this.screenHeight - this.height, this.width, this.height);
 }

Border.prototype.Up = function () { 
  let ctx = canvas.context
  let newImage = new Image()
      newImage.src = '../assets/images/back/sup.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.width, this.y, this.screenWidth - (this.width * 2), this.height - 10);
 }
Border.prototype.Down = function () { 
  let ctx = canvas.context
  let newImage = new Image()
      newImage.src = '../assets/images/back/inf.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.x + this.width, this.screenHeight - this.height + 9, this.screenWidth - (this.width * 2), this.height);
  // ctx.strokeRect(this.x + this.width, 620, this.screenWidth - (this.width * 2), this.height);
 }
 Border.prototype.Left = function () { 
  let ctx = canvas.context
  let newImage = new Image()
      newImage.src = '../assets/images/back/li.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(0, this.width, this.width - 5 , this.screenHeight - (this.height * 2));
  // ctx.strokeRect(this.screenWidth - this.width, this.width, this.width ,this.screenHeight - (this.height * 2));
 }
 Border.prototype.Right = function () { 
  //  This border sucks! 
  let ctx = canvas.context
  let newImage = new Image()
      newImage.src = '../assets/images/back/ld.png'
  let borderPtrn = ctx.createPattern(newImage, 'repeat')
  ctx.fillStyle= borderPtrn;  
  ctx.fillRect(this.screenWidth - 25, this.width, 25 ,this.screenHeight - (this.height * 2));
  // ctx.strokeRect(this.screenWidth - this.width, this.width, this.width ,this.screenHeight - (this.height * 2));
 }
export {Border};