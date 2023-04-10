class Leg {
    constructor(parentSegment, rot, length) {
      this.parentSegment = parentSegment;
      this.rot = rot;
      this.length = length;
      this.footPos = createVector(0, 0);
      this.nextFootPos = createVector(0, 0);
    }
  
    draw() {
      // Draw Leg
      line(
        this.parentSegment.pos.x,
        this.parentSegment.pos.y,
        this.footPos.x,
        this.footPos.y
      );
  
      // Draw Foot
      circle(this.footPos.x, this.footPos.y, footRad * 2);
    }
  
    move() {
      const distance = dist(this.parentSegment.pos.x, this.parentSegment.pos.y, this.footPos.x, this.footPos.y);

      if (distance > legLen) {
        this.nextFootPos = createVector(
          this.parentSegment.pos.x + this.length * cos(this.parentSegment.rot + this.rot),
          this.parentSegment.pos.y + this.length * sin(this.parentSegment.rot + this.rot)
        );
      }

      // Interpolate foot position gradually
      this.footPos.lerp(this.nextFootPos, stepSpeed);
    }
  }