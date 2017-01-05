function Player(pos) {
    if (pos) {
        this.pos = pos.copy();
    }
    else {
        this.pos = createVector(width / 2, height - bord_size - hud_size);
    }
    this.h = 100;
    this.w = 25;
    this.vel = createVector(0, 0);
    this.color = 10;
    this.update = function () {
        var strength = 0.1;
        var drag = 0.3;
        var max_vel = 7;
        var target = mouseX;
        var force = (target - this.pos.x) * strength;
        this.vel.x *= drag;
        this.vel.x += force;
        if (this.vel.x >= max_vel) {
            this.vel.x = max_vel
        }
        if (this.vel.x <= -max_vel) {
            this.vel.x = -max_vel
        }
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        noFill();
        stroke(this.color);
        image(img_player, this.pos.x, this.pos.y - this.h * 1.1 / 2, this.w * 2, this.h * 1.1);
        //rect(this.pos.x, this.pos.y - this.h / 2, this.w, this.h); //HIT BOX
        pop();
    }
    this.edges = function () {
            if (this.pos.x + this.w / 2 + bord_size > width) {
                this.pos.x = width - this.w / 2 - bord_size;
            }
            else if (this.pos.x - this.w / 2 < bord_size) {
                this.pos.x = this.w / 2 + bord_size;
            }
        }
        //  this.move = function(a) {
        //    this.vel = a;
        //  }
}