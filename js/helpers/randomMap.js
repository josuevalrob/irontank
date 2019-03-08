import {positions} from './positions.js'
import {woodBlock} from '../components/blocks/woodBlock.js'
import {ironBlock} from '../components/blocks/ironBlock.js';
import {Tree} from '../components/tree.js';
// Create an array of possible positions. 
let objects = {}
let objectsKeys
function randomMap () { 
  objects.blocks = []
  shuffleArry(positions.random) 
  objects.trees = positions.random.map(e =>{
    return new Tree(50, 50, 'tree.png', e[0], e[1])
    // objects.blocks.push(new woodBlock(positions[i][0], positions[i][1]))
    // objects.blocks.push(new ironBlock(positions[i][0], positions[i][1]))
  })
  // objects.blocks.push(new ironBlock(positions.square[0][0], positions.square[0][1]))
  objects.blocks = positions.square.map(e=>{
    return new woodBlock(e[0], e[1])
  })

  console.log(objects.blocks)
  objectsKeys = Object.keys(objects);
}

function shuffleArry (arr) {
  var m = arr.length, t, i;
  while (m) { 
    i = Math.floor(Math.random() * m--); 
    t = arr[m]; 
    arr[m] = arr[i];
    arr[i] = t;
  }
};

export {randomMap, objects, objectsKeys}