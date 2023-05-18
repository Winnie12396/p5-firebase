import { writeNewPost } from "./switch.js"

var val = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('click me');
  button.position(windowWidth/2, windowHeight/2);
}

function draw(){
  background(255);
  button.mousePressed(change);
  text(val,windowWidth/2, windowHeight/2-30);
}

function change() {
  if (val)val = false;
  else val = true;
  writeUserData('/', val);
}
