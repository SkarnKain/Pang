function Bubble(size, pos, vel, color) {
    if (size) {
        this.size = size;
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.color = color;
    }
    else {
        var x = random([0, width]);
        var y = random(0, height / 2);
        this.pos = createVector(x, y);
        this.size = random(50, 100);
        if (x == 0) {
            var temp_vel = random(2, 5);
        }
        else {
            var temp_vel = random(-5, -2);
        }
        this.vel = createVector(temp_vel, 0);
        this.color = floor(random(0, 5));
        }
        this.update = function () {
            this.vel.x += force.x;
            this.vel.y += force.y;
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        }
        this.edges = function () {
            if (this.pos.x > width - bord_size - this.size / 2) {
                this.pos.x = width - bord_size - this.size / 2;
                if (this.vel.x > 0) {
                    this.vel.x *= -1
                };
            }
            if (this.pos.x < bord_size + this.size / 2) {
                this.pos.x = bord_size + this.size / 2;
                if (this.vel.x < 0) {
                    this.vel.x *= -1
                };
            }
            if (this.pos.y > height - bord_size - hud_size - this.size / 2) {
                this.pos.y = height - bord_size - hud_size - this.size / 2;
                if (this.vel.y > 0) {
                    this.vel.y *= -1
                };
            }
            if (this.pos.y < bord_size + this.size / 2) {
                this.pos.y = bord_size + this.size / 2;
                if (this.vel.y < 0) {
                    this.vel.y *= -1
                };
            }
        }
        this.render = function () {
            push();
            image(img_bubbles[this.color], this.pos.x, this.pos.y, this.size, this.size);
        //noFill();
        //ellipse(this.pos.x, this.pos.y, this.size);//HIT BOX
        pop();
    }
}