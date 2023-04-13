class BodySegment {
  constructor(rad, dist) {
    this.pos = createVector(0, 0);
    this.rad = rad;
    this.dist = dist;
    this.rot = 0;
    this.legs = [];
  }

  draw() {
    // Draw Body Segment
    push();
    fill(color);
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

  setRadius(r) {
      this.rad = r;
  }

  // ADD FORCE TO SEGMENT (Experimental)
  addForce(force) {
    this.pos.add(force.x, force.y);
  }



}