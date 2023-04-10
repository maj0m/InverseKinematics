// Constants
const segmentAmount = 16;
const segmentRad = 2;
const segmentDist = 12;
const legLen = 40;
const legRot = 30;
const footRad = 6;
const stepSpeed = 0.6;

// Variables
let body;

// Setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  body = new Body(segmentAmount, segmentRad, segmentDist);
  body.addLegs(2);
  body.addLegs(8);
  body.segments[0].setRadius(segmentRad + 10);
  body.segments[1].setRadius(segmentRad + 2);
  body.segments[2].setRadius(segmentRad + 3);
  body.segments[3].setRadius(segmentRad + 4);
  body.segments[4].setRadius(segmentRad + 5);
  body.segments[5].setRadius(segmentRad + 6);
  body.segments[6].setRadius(segmentRad + 5);
  body.segments[7].setRadius(segmentRad + 4);
  body.segments[8].setRadius(segmentRad + 3);
  body.segments[9].setRadius(segmentRad + 2);
  body.segments[10].setRadius(segmentRad + 1);
  body.segments[11].setRadius(segmentRad + 0);
  body.segments[12].setRadius(segmentRad + 0);
  body.segments[13].setRadius(segmentRad + 0);
  body.segments[14].setRadius(segmentRad + 0);
  body.segments[15].setRadius(segmentRad + 1);
}

// Draw function
function draw() {
  background(50);
  body.move();
  body.draw();
}