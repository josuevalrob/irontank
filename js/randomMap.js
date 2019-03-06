import {Block} from './block.js';
import {Tree} from './tree.js';
let objects = {}
let objectsKeys
function randomMap () {
  objects.blocks = [
    new Block(50, 50, 'box.png', 200, 200),
    new Block(50, 50, 'box.png', 300, 300)
  ]
  objects.tree = [
    new Tree(50, 50, 'tree.png', 300, 200),
    new Tree(50, 50, 'tree.png', 600, 300)
  ]
  objectsKeys = Object.keys(objects);
}

export {randomMap, objects, objectsKeys}