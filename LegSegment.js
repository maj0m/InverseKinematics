class LegSegment {
    constructor(length) {
      this.a = createVector(0, 0); // Initial
      this.b = createVector(0, 0); // Initial
      this.length = length;
      this.angle = 0; // Initial
    }
    
    follow(target) {
      const direction = p5.Vector.sub(target, this.a);
      this.angle = direction.heading();
      
      direction.setMag(this.length);
      direction.mult(-1);
      this.a = p5.Vector.add(target, direction);
    }
    
    move(x, y) {
      this.a.set(x, y);
      const dx = this.length * cos(this.angle);
      const dy = this.length * sin(this.angle);
      this.b.set(this.a.x + dx, this.a.y + dy);
    }    
    
    draw() {
      push();
      strokeWeight(4); 
      line(this.a.x, this.a.y, this.b.x, this.b.y);
      pop();
    }
  }