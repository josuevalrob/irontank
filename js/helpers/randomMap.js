import {positions} from './positions.js'
import {woodBlock} from '../components/blocks/woodBlock.js'
import {ironBlock} from '../components/blocks/ironBlock.js';
import {Tree} from '../components/tree.js';
// Create an array of possible positions. 
let objects = {}
let objectsKeys
function randomMap () { 
  shuffleArry(positions.random) 
  objects.trees = positions.random.map((e, i) =>{
    if(i%2 == 0){
      return new Tree(50, 50, 'tree.png', e[0], e[1])
    } else {
      return new Tree(35, 35, 'treesmall.png', e[0], e[1])
    }
  })
  
  objects.blocks = positions.square.map(e=>{
    return new ironBlock(e[0], e[1])
  })

  objects.blocks = objects.blocks.concat(positions.line.map(e => {
    return new woodBlock(e[0], e[1])
  }))

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