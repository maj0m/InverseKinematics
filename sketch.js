// Constants
const segmentDist = 5;
const legLen = 40;
const legRot = 35;
const footRad = 5;
const stepSpeed = 0.5;

// Variables
let followMode = true;

let body;
let target;
let segments = [];
let footsteps = [];

// Colors
let color = [10, 153, 89, 255];
let legColor = [10, 100, 80, 200];

// Body shapes
let bodyShape1 = [140, 160, 70, 75, 85, 95, 105, 110, 115, 120, 120, 120, 115, 110, 105, 100, 90, 80, 70, 60, 50, 45, 40, 35, 35, 30, 28, 25, 25, 20, 20, 20, 15, 15, 15, 15, 15, 15, 15, 15]

// SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Initialize segments from bodyShape
  for (let i = 0; i < bodyShape1.length; i++) {
    segments.push(new BodySegment(bodyShape1[i]/10, segmentDist, color, legColor));
  }

  segments[4].addLegs();
  segments[16].addLegs();

  body = new Body(segments, color, legColor);
}

// DRAW
function draw() {
  noStroke();
  background(50);
  fill(255);
  text('Press SPACE to toggle between:\nCursor Follow Mode / WASD Controls', 10, 20);

  // Update and Draw Footsteps
  for(let step of footsteps) {
    step.update();
    step.draw();
  }

  // Update and Draw Body
  target = createVector(mouseX, mouseY);

  if(followMode) {
    body.follow(target);
  } else {
    body.move();
  }
  
  body.update();
  body.draw();
}

function keyPressed() {
  if(keyCode == 32) {
    followMode = !followMode;
  }
}

// function mouseClicked() {
//   target.x = mouseX;
//   target.y = mouseY;
// }