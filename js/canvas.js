import {updateGame} from './main.js';
let canvas = {  
    image : new Image(),  
    canvas : document.createElement('canvas'), 
    start : function () {
        this.context = this.canvas.getContext('2d')
        this.canvas.width = 964; //964x904 pixels
        this.canvas.height = 865;
        this.image.src = '../styles/assets/images/27982.png';       
        this.image.onload = updateGame();  
        document.getElementById('game-board').appendChild(this.canvas);
    },  
    stop: function(){
        this.pause = !this.pause;
    }, 
    bkgDraw :  function (){
        this.context.drawImage(this.image, 0, 0);
    } 
}



export {canvas}