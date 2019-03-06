import {Block} from './block.js';
import {Tree} from './tree.js';
let objects = {}
let objectsKeys


// Create an array of possible positions. 
let positions = [
  [200, 200],
  [350, 400],
  [30, 600],
  [100, 500],
]

function shuffleCards () {
  console.log(positions)
  var m = positions.length, t, i;
  // While there remain elements to shuffle…
  while (m) { //haz esto n veces. -> 10 || -> 9
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--); //encuentra un random de n -> 5 || -> 8
    // And swap it with the current element.
    t = positions[m]; // t = elem(10) || t = elem(9)
    positions[m] = positions[i]; // elem(10) = elem(5) || elem(9) = elem(8)
    positions[i] = t;  //elem(5) = elem(10) || elem(8) = elem(9)
  }
  console.log(positions)
  // En la primera vuelta, el elemento 10 toma la posición 5 
    // mientras que el elemento 5 toma la posición 10 
  // en la segunda vuelta, el elemento 9 toma la posición 8
    //mientras que el elemento 8 toma la posición 9. 
  // de esta forma no importa que el número random se repita.

};

function randomMap () { 
  shuffleCards() 
  objects.blocks = [
    new Block(50, 50, 'box.png', positions[0][0], positions[0][1]),
    new Block(50, 50, 'box.png', positions[1][0], positions[1][1])
  ]
  objects.tree = [
    new Tree(50, 50, 'tree.png', positions[2][0], positions[2][1]),
    new Tree(50, 50, 'tree.png', positions[3][0], positions[3][1])
  ]
  objectsKeys = Object.keys(objects);
}

export {randomMap, objects, objectsKeys}