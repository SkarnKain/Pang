function Bonus(pos, type) {

    this.pos = pos.copy();
    this.vel = createVector(0, -5);
    this.type = type;
    this.size = 20;

    this.update = function () {
        this.vel.x += force.x;
        this.vel.y += force.y;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    this.edges = function () {
        if (this.pos.y > height - this.size) {
            this.pos.y = height - this.size;
            if (this.vel.y > 0) {
                this.vel.y *= 0
            };
        }
    }

    this.render = function () {
        //image(img_bubble_blue, this.pos.x, this.pos.y, this.size, this.size);
        noFill();
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.size, this.size, this.size / 5);
    }

}