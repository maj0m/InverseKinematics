class FootStep {
    constructor(pos, rad) {
        this.pos = pos;
        this.rad = rad;
        this.color = [0, 0, 0, 100];
        this.timeToLive = 100;
    }

    draw() {
        push();

        fill(this.color);
        circle(this.pos.x, this.pos.y, this.rad*2);

        pop();
    }

    update() {
        this.timeToLive -= 1;

        if(this.timeToLive < 0) {
            this.delete();
        }

        this.color = [0, 0, 0, this.timeToLive];
    }

    delete() {
        footsteps.splice(footsteps.indexOf(this), 1);
    }
}