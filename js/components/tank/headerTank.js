import {Dinamic} from '../dinamic.js';

// Okey, this get heavy now. 
HeaderTank.prototype = Object.create(Dinamic.prototype);

function HeaderTank (x, y, degree){
  let img = 'tank/head.png'
  let width = 50
  let height = 25
  Dinamic.call(this, width, height, img, x, y, degree)
}

HeaderTank.prototype.paint = function(x, y, dgr) {
  this.x = x
  this.y = y
  this.degree = dgr
  this.update()
}

export {HeaderTank}