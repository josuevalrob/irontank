import {updateGame} from './main.js';
let canvas = {  
    image : new Image(),  
    canvas : document.createElement('canvas'), 
    pause : true
}

canvas.start = function () {
    this.context = this.canvas.getContext('2d')
    this.image.src = '../assets/images/back/main.png';  
    this.pause = true;     
    this.image.onload = updateGame();  
    document.getElementById('game-board').appendChild(this.canvas);
},  
canvas.stop = function (){
    this.pause = !this.pause;
}, 
canvas.bkgDraw =  function (){
    this.canvas.height = window.innerHeight;        
    this.canvas.width = window.innerWidth; //964x904 pixels
    this.mainPtrn = this.context.createPattern(this.image, 'repeat');
    this.context.fillStyle=this.mainPtrn;
    
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.context.drawImage(this.image, 0, 0);
} 
canvas.clear = function (){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

export {canvas}