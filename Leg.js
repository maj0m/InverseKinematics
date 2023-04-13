class Leg {
  constructor(parentSegment, rot, length) {
    this.parentSegment = parentSegment;
    this.rot = rot;
    this.length = length;
    this.footPos = createVector(0, 0); // Initial
    this.nextFootPos = createVector(0, 0); // Initial
    
    this.segments = [new LegSegment(3*legLen/5), new LegSegment(2*legLen/5)]; //2 leg segments for each leg
  }

  draw() {
    // Draw leg segments
    this.segments[0].draw();
    this.segments[1].draw();

    // Draw Foot
    push();
    fill(color);
    circle(this.footPos.x, this.footPos.y, footRad * 2);
    pop();

    // Draw ideal step (DEBUG);
    // push();
    // fill(120, 40, 70);
    // let idealStep = this.calculateNextStep();
    // circle(idealStep.x, idealStep.y, footRad * 2);
    // pop();
  }

  calculateNextStep() {
    return createVector(
      this.parentSegment.pos.x + this.length * cos(this.parentSegment.rot + this.rot),
      this.parentSegment.pos.y + this.length * sin(this.parentSegment.rot + this.rot)
    );
  }

  move() {
    // Distance between parent Body Segment and current Foot Position
    const distance = dist(this.parentSegment.pos.x, this.parentSegment.pos.y, this.footPos.x, this.footPos.y);

    //If foot is far behind, calculate next step position
    if (distance > legLen * 1.2) {
      this.nextFootPos = this.calculateNextStep();
    }

    // Calculating leg segments with Inverse Kinematics
    this.segments[0].follow(this.footPos);
    this.segments[1].follow(this.segments[0].a);
    this.segments[1].move(this.parentSegment.pos.x, this.parentSegment.pos.y);
    this.segments[0].move(this.segments[1].b.x, this.segments[1].b.y);
    
    // Interpolate between current and desired foot pos
    this.footPos.lerp(this.nextFootPos, stepSpeed);    
  }

  
}