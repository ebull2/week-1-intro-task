//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Simple Interaction

//Define variables for the RGB
let r = 255;
let g = 255;
let b = 255;

var value = 'rect'


function setup() {
  createCanvas(640, 480);
  background(0)
  stroke(0);
}

function draw() {

  //When mouse is pressed, change randomly the RGB variables
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  //Display the ellipse
  fill(r, g, b);
  ellipse(mouseX, mouseY, 80, 80);
}

  function KeyTyped() {
    if (key === 'a') {
      value = 255;
    } else if (key === 'b') {
      value = 0;
    }

  }
