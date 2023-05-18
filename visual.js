import { writeUserData } from "init-firebase.js"

var val = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('click me');
  button.position(windowWidth/2, windowHeight/2);
}

function draw(){
  background(180, 238, 250);
  button.mousePressed(change);
  text(val,windowWidth/2, windowHeight/2-30);
}

function change() {
  if (val)val = false;
  else val = true;
  writeUserData('/', val);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function drawCircle() {
  ellipse(getRandomInt(100, windowWidth - 100), getRandomInt(100, windowHeight + 100), 50);
}
