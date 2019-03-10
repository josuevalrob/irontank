// [x, y]
let hor = (window.innerWidth / 2) - 50
let ver = (window.innerHeight / 2) - 50
let positions = {
  random: [
    [630, 500],
    [100, 400],
    [200, 200],
    [350, 400],
    [400, 400],
    [500, 200],
    [650, 400],
    [700, 500],
  ], 
  square : [
    [hor, ver], 
    [hor + 50, ver],
    [hor + 50, ver + 50],
    [hor, ver + 50],
  ],
  cross: [
    [hor, ver], 
    [hor + 50, ver],
    [hor + 50, ver + 50],
    [hor, ver + 50],
    // line
    [hor - 50, ver],
    [hor - 100, ver],
    [hor - 150, ver],
    [hor - 200, ver],
  ],
  line : [
    [50, 200],
    [100, 200],
    [150, 200],
    [200, 200],
    [250, 200],
    [300, 200]
  ], 
}

export {positions}