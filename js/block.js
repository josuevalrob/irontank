import {Obstacle} from './obstacles.js'

Block.prototype = Object.create(Obstacle.prototype);

function Block (width, height, img, x, y){
  Obstacle.call(this, width, height, img, x, y)
}

// Function for slow the bullet speed. 

export {Block};