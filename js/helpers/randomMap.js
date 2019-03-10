import {positions} from './positions.js'
import {woodBlock} from '../components/blocks/woodBlock.js'
import {ironBlock} from '../components/blocks/ironBlock.js';
import {Tree} from '../components/tree.js';
// Create an array of possible positions. 
let objects = {}
let objectsKeys
let hor = window.innerWidth
let ver = (window.innerHeight / 2) - 50
let horTotal = Math.floor(hor / 50)
let horMid = Math.floor(horTotal/2)
let increase = 0
function randomMap () { 
  shuffleArry(positions.random) 
  objects.trees = positions.random.map((e, i) =>{
    if(i%2 == 0){
      return new Tree(50, 50, 'tree.png', e[0], e[1])
    } else {
      return new Tree(35, 35, 'treesmall.png', e[0], e[1])
    }
  })

  objects.blocks = positions.line.map(e => {
        return new woodBlock(e[0], e[1])
      }).concat( 
        Array.from(Array(horMid), (_,i)=>{
          increase = i * 50
          return new ironBlock(hor - increase, ver)
          })
      ).concat(
        Array.from(Array(horMid), (_,i)=>{
          increase = i * 50
          return new ironBlock(hor - increase, ver + 50)
        })
      )

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