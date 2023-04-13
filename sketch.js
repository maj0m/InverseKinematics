// Constants
const segmentDist = 5;
const legLen = 40;
const legRot = 35;
const footRad = 5;
const stepSpeed = 0.5;
const speed = 2;

// Variables
let body;
let segments = [];
let target;

// Colors
let color = [10, 153, 89, 255];
let legColor = [10, 100, 80, 200];

// Body shapes
let bodyShape1 = [140, 160, 70, 75, 85, 95, 105, 110, 115, 120, 120, 120, 115, 110, 105, 100, 90, 80, 70, 60, 50, 45, 40, 35, 35, 30, 28, 25, 25, 20, 20, 20, 15, 15, 15, 15, 15, 15, 15, 15]
let bodyShape2 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 50, 50, 50, 50, 50, 50, 50, 50, 160];

// SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Initialize segments from bodyShape
  for (let i = 0; i < bodyShape1.length; i++) {
    segments.push(new BodySegment(bodyShape1[i]/10, segmentDist));
  }

  body = new Body(segments);
  

  body.addLegs(4);
  body.addLegs(14);

  target =  createVector(400, 400);

}

// DRAW
function draw() {
  noStroke();
  background(50);
  body.follow(mouseX, mouseY);
  body.draw();
}

function keyPressed() {
  if(keyCode == 32) {
    //testing area
  }

  // Set body to bodyShape1
  if(keyCode == 49) {
    segments = [];
    for (let i = 0; i < bodyShape1.length; i++) {
      segments.push(new BodySegment(bodyShape1[i]/10, segmentDist));
    }
    body = new Body(segments);
  }

  // Set body to bodyShape2
  if(keyCode == 50) {
    segments = [];
    for (let i = 0; i < bodyShape2.length; i++) {
      segments.push(new BodySegment(bodyShape2[i]/10, segmentDist));
    }
    body = new Body(segments);
  }
}

function mouseClicked() {
  target.x = mouseX;
  target.y = mouseY;
}