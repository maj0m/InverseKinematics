class Body {
  constructor(segments, color, legColor) {
    this.segments = segments;
    this.pos = createVector(windowWidth/2, windowHeight/2); // Position of the Head
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.dir = createVector(0, 0);
    this.maxSpeed = 5;
    this.turnSpeed = 25;
        
    this.color = color;
    this.legColor = legColor;
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

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.dir.x = this.segments[0].pos.x - this.segments[1].pos.x;
    this.dir.y = this.segments[0].pos.y - this.segments[1].pos.y;

    this.vel.x *= 0.9;
    this.vel.y *= 0.9;

    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i];
      // Move Body segments
      if (i == 0) { //If Body segment is head, follow target
        segment.moveTo(this.pos);
      } else { // Else follow previous body segment
        segment.follow(this.segments[i - 1].pos);
      }

      // Move Legs
      for(var leg of segment.legs) {
        leg.move();
      }
    }
  }

  follow(target) {
    this.dir = target.sub(this.pos);
    if(mag(this.dir.x, this.dir.y) > this.segments.length * segmentDist / 2) {
      this.applyForce(this.dir);
    }
  }

  move() {
      if(keyIsDown(87)) { // W: Move in a forward direction 
        this.applyForce(this.dir);
      }    

      if(mag(this.vel.x, this.vel.y) > this.maxSpeed * 0.8) {
        if(keyIsDown(65)) { // A: Turn left
          this.vel = this.rotateForce(this.vel, this.turnSpeed);
        }
    
        if(keyIsDown(68)) { // D: Turn right
          this.vel = this.rotateForce(this.vel, -this.turnSpeed);
        }
      }
    
  }

  applyForce(force) {
    this.acc.add(force);
  }
  
  rotateForce(force, angle) {
    let x = cos(-angle)*force.x - sin(-angle)*force.y;
    let y = sin(-angle)*force.x + cos(-angle)*force.y;
    return createVector(x, y);
  }
}