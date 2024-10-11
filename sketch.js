let width = 1000;
let height = 2000;

let px1, px2, pcomb;
let padding=130;

const w = 250;
const h = 250;

const buffer = 100;

let b = [];
let b1 = [];
let b2 = [];

let n = 4;

function setup() {
  createCanvas(width, height);
  b1 = createButton('Reset');
  b1.position(400 + w/2, 100);
  b1.mousePressed(reset);
  createOrbitals();
}

function createOrbitals(){
  for (let i = 0; i < n; i++){
    let y = 50 + i*w + i*padding;
    let x1 = 50;
    let x2 = 750;
  
    b1[i] = new orb(i, x1, y, false);
    b2[i] = new orb(i, x2, y, false);
  }
}

function createImages(){
  for (let i = 0; i < n; i++){
    let y = 50 + i*w + i*padding;
    let x1 = 50;
    let x2 = 750;
    image(b[i],x1,y);
    image(b[i],x2,y);
  }
}

class orb {
  constructor(label, x, y, bool){
    this.pos = [x, y];
    this.bool = bool;
    this.label = label;
  }
}

// Load the image.
function preload() {
  px1 = loadImage('/res/Px-.png');
  px2 = loadImage('/res/Px+.png');
  pz1 = loadImage('/res/Pz-.png');
  pz2 = loadImage('/res/Pz+.png');
  pc1 = loadImage('/res/constructivePx.png');
  pc2 = loadImage('/res/Pcombconst.png');
  pc3 = loadImage('/res/Pzdestructive.png')
  b.push(px1, px2, pz1, pz2, pc1, pc2);
}



function mousePressed() {
  for (let i=0; i<n; i++){
    let d1 = dist(mouseX, mouseY, b1[i].pos[0] + w/2, b1[i].pos[1] + h/2);
    let d2 = dist(mouseX, mouseY, b2[i].pos[0] + w/2, b2[i].pos[1] + h/2);

    if (d1 < buffer){
      b1[i].bool = true;
    }
    if (d2 < buffer){
      b2[i].bool = true;
    }
  }

  // let d1 = dist(mouseX, mouseY, shape1X+80, shape1Y+80);
  // let d2 = dist(mouseX, mouseY, shape2X+80, shape2Y+80);

  // if (d1 < buffer){
  //   shapeMove1 = true;
  // } else {
  //   shapeMove1 = false;
  // }

  // if (d2 < buffer){
  //   shapeMove2 = true;
  // } else {
  //   shapeMove2 = false;
  // }
}

function update(){
  if (b1[1].bool && b2[0].bool){
    image(pc1, 400, 200);
  } 
  if (b1[2].bool && b2[2].bool){
    image(pc2, 400, 400);
  }
  if (b1[3].bool && b2[2].bool){
    image(pc3,400,800);
  }
}

function reset(){
  noCanvas();
  setup();
  createOrbitals();
  redraw();
}

// function mouseReleased(){
//   shapeMove1 = false;
//   shapeMove2 = false;
// }

// function mouseDragged(){
//   if (shapeMove1){
//     shape1X = mouseX;
//     shape1Y = mouseY;
//   }

//   if (shapeMove2){
//     shape2X = mouseX;
//     shape2Y = mouseY;
//   }
// }

function draw() {
  background(220);
  createImages();
  update();
}

