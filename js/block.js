import {Static} from './static.js'

Block.prototype = Object.create(Static.prototype);

function Block (width, height, img, x, y){
  Static.call(this, width, height, img, x, y)
}

// Function for slow the bullet speed. 

export {Block};