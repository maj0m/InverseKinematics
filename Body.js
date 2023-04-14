class Body {
  constructor(segments) {
    this.segments = segments;
    this.target = createVector(0, 0);
  }

  draw() {
    this.drawLegs();
    this.drawBodySegments();
    
  }

  drawBodySegments() {
    for (let seg of this.segments) {
      seg.draw();     
    }
  }

  drawLegs() {
     // Draw Legs
     for (let seg of this.segments) {     
      for (let leg of seg.legs) {
        leg.draw();
      }
    }
  }

  follow(target) {
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
    if( segID < this.segments.length) {
      this.segments[segID].legs = [];
    }
  }
}