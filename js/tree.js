import {Static} from './static.js'

Tree.prototype = Object.create(Static.prototype);

function Tree (width, height, img, x, y){
  Static.call(this, width, height, img, x, y)
}

// Function for slow the bullet speed. 

export {Tree};