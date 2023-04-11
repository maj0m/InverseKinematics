// Constants
const segmentAmount = 18;
const segmentRad = 2;
const segmentDist = 10;
const legLen = 32;
const legRot = 40;
const footRad = 5;
const stepSpeed = 0.6;
const speed = 3;

// Variables
let body;
let color = [70, 120, 240];

// SETUP
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
  body.segments[5].setRadius(segmentRad + 5);
  body.segments[6].setRadius(segmentRad + 5);
  body.segments[7].setRadius(segmentRad + 5);
  body.segments[8].setRadius(segmentRad + 4);
  body.segments[9].setRadius(segmentRad + 3);
  body.segments[10].setRadius(segmentRad + 2);
  body.segments[11].setRadius(segmentRad + 1);
  body.segments[12].setRadius(segmentRad + 1);
  body.segments[13].setRadius(segmentRad + 1);
  body.segments[14].setRadius(segmentRad + 0);
  body.segments[15].setRadius(segmentRad + 0);
  body.segments[16].setRadius(segmentRad + 0);
  body.segments[17].setRadius(segmentRad + 0);

}

// DRAW
function draw() {
  background(50);
  body.move();
  body.draw();
}