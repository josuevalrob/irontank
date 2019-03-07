
function Component(width, height, img, x, y, degree = 55) {
  // Image properties
  this.imageComp = new Image();
  this.imageComp.src = '../assets/images/' + img;
  // Size property
  this.width = width;
  this.height = height;
  // Position properties
  this.x = x;
  this.y = y;  
  // rotation properties
  this.rotX = this.width / -2;
  this.rotY = this.height / -2;
  this.degree = degree; //'N' => 270 'S' => 90, 'W' => 180 'E' => 0  
  
  // Current Position -> this should be in a function??
  this.left   = function() { return this.x };
  this.right  = function() { return (this.x + this.width) };
  this.top    = function() { return this.y };
  this.bottom = function() { return (this.y + this.height) };
}


export {Component};