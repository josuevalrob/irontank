export let canvas = {  
    image : new Image(),  
    canvas : document.createElement('canvas'), 
    frames: 320,
    pause: false,
    start : function () {
      this.context = this.canvas.getContext('2d')
      this.canvas.width = 880;
      this.canvas.height = 470;
      this.image.src = './images/bg.png';       
      this.image.onload = updateGame();  
  
      document.getElementById('game-board').appendChild(this.canvas);
    },  
    stop: function(){
      this.pause = !this.pause;
    }   
  }