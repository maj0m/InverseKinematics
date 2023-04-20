class BodySegment {
  constructor(rad, dist, color, legColor) {
    this.pos = createVector(0, 0); // Initial
    this.rad = rad;
    this.dist = dist;
    this.rot = 0; // Initial
    this.legs = [];

    this.color = color;
    this.legColor = legColor;
  }

  draw() {
    // Draw Body Segment
    push();
    fill(this.color);
    strokeWeight(2);
    circle(this.pos.x, this.pos.y, this.rad * 2);
    pop();
  }

  follow(target) {
    const dx = target.x - this.pos.x;
    const dy = target.y - this.pos.y;
    this.rot = atan2(dy, dx);
    this.pos = createVector(target.x - this.dist * cos(this.rot), target.y - this.dist * sin(this.rot));
  }

  moveTo(pos) {
    this.pos = pos;
  }

  setRadius(r) {
      this.rad = r;
  }

  // ADD FORCE TO SEGMENT (Experimental)
  addForce(force) {
    this.pos.add(force.x, force.y);
  }

  // Add legs to a body segment by ID
  addLegs() {
    this.legs.push(new Leg(this, legRot, legLen));
    this.legs.push(new Leg(this, -legRot, legLen));
  }

  // Remove legs from a body segment by ID
  removeLegs() {
    this.segments[segID].legs = [];
  }



}