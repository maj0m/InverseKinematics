class Body {
  constructor(segments) {
    this.segments = segments;
    this.target = createVector(0, 0);
  }

  draw() {
    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i];

      // Draw Legs
      for (let leg of segment.legs) {
        leg.draw();
      }

      // Draw Body segments
      segment.draw();
    }
  }

  follow(targetX, targetY) {
    let target = createVector(targetX, targetY);
    this.target.lerp(target, speed/100); 

    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i];

      // Move Body segments
      if (i === 0) {
        segment.follow(this.target);
      } else {
        segment.follow(this.segments[i - 1].pos);
      }

      // Move Legs
      for(var leg of segment.legs) {
        leg.move();
      }
    }
  }

  // Add legs to a body segment by ID
  addLegs(segID) {
    if( segID < this.segments.length && this.segments[segID].legs.length == 0) {
      this.segments[segID].legs.push(new Leg(this.segments[segID], legRot, legLen));
      this.segments[segID].legs.push(new Leg(this.segments[segID], -legRot, legLen));
    }
  }

  removeLegs(segID) {
    if( segID < segmentAmount) {
      this.segments[segID].legs = [];
    }
  }
}