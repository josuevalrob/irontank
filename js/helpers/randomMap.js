import {Block} from '../components/block.js';
import {Tree} from '../components/tree.js';
// Create an array of possible positions. 
let positions = [
  [200, 200],
  [350, 400],
  [30, 600],
  [100, 500],
  [500, 200],
  [650, 400],
  [700, 600],
  [400, 500],
]
let objects = {}
let objectsKeys
function randomMap () { 
  shuffleCards(positions) 
  objects.blocks = []
  objects.tree = []
  // objects.blocks.push(new Block(200, 200))
  for (let i = 0; i < positions.length; i++) {
    if (i % 2 == 0){
      objects.blocks.push(new Block(positions[i][0], positions[i][1]))
    } else{
      objects.tree.push(new Tree(50, 50, 'tree.png', positions[i][0], positions[i][1]))
    }
  }
  objectsKeys = Object.keys(objects);
}

function shuffleCards (arr) {
  var m = arr.length, t, i;
  while (m) { 
    i = Math.floor(Math.random() * m--); 
    t = arr[m]; 
    arr[m] = arr[i];
    arr[i] = t;
  }
};

export {randomMap, objects, objectsKeys}