// Constants
const segmentAmount = 16;
const segmentRad = 10;
const segmentDist = 12;
const legLen = 40;
const legRot = 30;
const footRad = 6;

// Variables
let body;

// Setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  body = new Body(segmentAmount, segmentRad, segmentDist);
  body.addLegs(2);
  body.addLegs(8);
  body.segments[0].setRadius(12);
  body.segments[1].setRadius(4);
  body.segments[2].setRadius(5);
  body.segments[3].setRadius(6);
  body.segments[4].setRadius(7);
  body.segments[5].setRadius(8);
  body.segments[6].setRadius(7);
  body.segments[7].setRadius(6);
  body.segments[8].setRadius(5);
  body.segments[9].setRadius(4);
  body.segments[10].setRadius(3);
  body.segments[11].setRadius(2);
  body.segments[12].setRadius(2);
  body.segments[13].setRadius(2);
  body.segments[14].setRadius(2);
  body.segments[15].setRadius(3);
}

// Draw function
function draw() {
  background(50);
  body.move();
  body.draw();
}