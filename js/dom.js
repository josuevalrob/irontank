var blue
var button = document.getElementById("main-button");
var curText = button.innerText;
var element = document.getElementById("play");
    

// var blue = new Image()


function actionButton(){
    button.addEventListener("click", function(){
      element.classList.toggle("play");
      element.classList.toggle("stop");
      element.classList.toggle('hide')
      if(this.innerText == curText){
        button.innerText = "Pause Game";        
      } else{ 
        button.innerText = curText;
      }  
    }, false);
}


document.addEventListener('DOMContentLoaded', function () {
  actionButton();
})
