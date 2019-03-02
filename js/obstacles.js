import {Component} from './component.js';
//Copying prototypes from Component
Obstacle.prototype = Object.create(Component.prototype); 

function Obstacle (width, height, img, x, y){
  Component.call(this, width, height, img, x, y);
}

export {Obstacle}