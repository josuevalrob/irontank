import {positions} from './positions.js'
import {woodBlock} from '../components/blocks/woodBlock.js'
import {ironBlock} from '../components/blocks/ironBlock.js';
import {Tree} from '../components/tree.js';
// Create an array of possible positions. 
let objects = {}
let objectsKeys
let hor = window.innerWidth
let ver = (window.innerHeight / 2) - 50
// let horMid = Math.floor(horTotal/2)
function caltot(e){
  return Math.floor(e / 50)
}
let increase = 0
function randomMap () {   
  // objects.blocks = 
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50            
  //           return new woodBlock((hor / 2) + 30, 200  - increase + 35)
  //         }
  //       ).concat( 
  //         Array.from(Array(caltot(hor)), (_,i)=>{
  //           increase = i * 50
  //           return new ironBlock(hor - 60 - increase, ver)
  //           })
  //       ).concat(
  //         Array.from(Array(caltot(hor)), (_,i)=>{
  //           increase = i * 50
  //           return new woodBlock(hor - 60 - increase, ver + 50)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(hor)), (_,i)=>{
  //           increase = i * 50
  //           return new woodBlock(hor - 60 - increase, ver - 50)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50
  //           return new woodBlock((hor / 2) - 70, 200  - increase + 35)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50
  //           return new ironBlock((hor / 2) - 20, 200  - increase + 35)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50
  //           return new ironBlock((hor / 2) - 20, (ver * 1.935)  - increase + 35)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50
  //           return new woodBlock((hor / 2) + 30, (ver * 1.935)  - increase + 35)
  //         })
  //       ).concat(
  //         Array.from(Array(caltot(ver)), (_,i)=>{
  //           increase = i * 50
  //           return new woodBlock((hor / 2) - 70, (ver * 1.935)  - increase + 35)
  //         })
  //       )
// Trees   
  objects.trees = [ ...positions.random.map((e, i) => pairsTree(i, e[0], e[1])), 
                    ...Array.from(Array(caltot(ver)), (_,i)=>{
                      increase = i * 50
                      let x = (hor / 2) - 120
                      let y = (ver * 1.935)  - increase + 35
                      return pairsTree(i, x, y)
                    }),
                    ...Array.from(Array((caltot(ver) - 1)), (_,i)=>{
                      increase = i * 50
                      let x = (hor / 2) + 80
                      let y = 5 + increase + 35
                      return pairsTree(i, x, y)
                    })
                  ]
  objectsKeys = Object.keys(objects);
}
const pairsTree = (i, x, y) => {
  if(i%2 == 0){
    return new Tree(50, 50, 'tree.png', x, y)
  } else {
    return new Tree(35, 35, 'treesmall.png', x, y)
  }
}


export {randomMap, objects, objectsKeys}