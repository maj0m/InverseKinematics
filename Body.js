class Body {
    constructor(segmentAmount, radius, dist) {
      this.segments = [];
  
      // Create Body segments
      for (let i = 0; i < segmentAmount; i++) {
        this.segments.push(new BodySegment(radius, dist));
      }
    }
  
    draw() {
      for (let i = 0; i < this.segments.length; i++) {
        const segment = this.segments[i];
  
        // Draw Body segments
        segment.draw();
  
        // Draw Legs
        for (let leg of segment.legs) {
          leg.draw();
        }
      }
    }
  
    move() {
      for (let i = 0; i < this.segments.length; i++) {
        const segment = this.segments[i];
  
        // Move Body segments
        if (i === 0) {
          segment.follow(mouseX, mouseY);
        } else {
          segment.follow(this.segments[i - 1].pos.x, this.segments[i - 1].pos.y);
        }
  
        //Move Legs
        for(var leg of segment.legs) {
          leg.move();
        }
      }
    }
  
    addLegs(segID) {
      if( segID < segmentAmount && this.segments[segID].legs.length == 0) {
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