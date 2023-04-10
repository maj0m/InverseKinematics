class BodySegment {
    constructor(r, dist) {
      this.pos = createVector(0, 0);
      this.r = r;
      this.dist = dist;
      this.rot = 0;
      this.legs = [];
    }
  
    draw() {
      // Draw Body Segment
      fill(70, 120, 240);
      strokeWeight(2);
      circle(this.pos.x, this.pos.y, this.r * 2);
    }
  
    follow(x, y) {
      const dx = x - this.pos.x;
      const dy = y - this.pos.y;
      this.rot = atan2(dy, dx);
      this.pos = createVector(x - this.dist * cos(this.rot), y - this.dist * sin(this.rot));
    }

    setRadius(r) {
        this.r = r;
    }
  }