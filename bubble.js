function Bubble(size, pos, vel, color) {

    if (size) {
        this.size = size;
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.color = color;
    } else {
        var x = random([0, width]);
        var y = random(0, height / 2);
        this.pos = createVector(x, y);
        this.size = random(50, 100);
        if (x == 0) {
            var temp_vel = random(4, 7);
        } else {
            var temp_vel = random(-7, -4);
        }
        this.vel = createVector(temp_vel, 0);
        this.color = random(0, 100);
    }


    this.update = function () {
        this.vel.x += force.x;
        this.vel.y += force.y;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    this.edges = function () {
        if (this.pos.x > width - this.size / 2) {
            this.pos.x = width - this.size / 2;
            if (this.vel.x > 0) {
                this.vel.x *= -1
            };
        }
        if (this.pos.x < 0 + this.size / 2) {
            this.pos.x = 0 + this.size / 2;
            if (this.vel.x < 0) {
                this.vel.x *= -1
            };
        }
        if (this.pos.y > height - this.size / 2) {
            this.pos.y = height - this.size / 2;
            if (this.vel.y > 0) {
                this.vel.y *= -1
            };
        }
        if (this.pos.y < 0 + this.size / 2) {
            this.pos.y = 0 + this.size / 2;
            if (this.vel.y < 0) {
                this.vel.y *= -1
            };
        }
    }

    this.render = function () {
        image(img_bubble_blue, this.pos.x, this.pos.y, this.size, this.size);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.size);
    }

}