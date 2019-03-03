import {Obstacle} from './obstacles.js'

Tree.prototype = Object.create(Obstacle.prototype);

function Tree (width, height, img, x, y){
  Obstacle.call(this, width, height, img, x, y)
}

// Function for slow the bullet speed. 

export {Tree};