function Bullet(xpos) {
    this.vel = createVector(random(-3, 3), random(-30, -25));
    var x_start = xpos + random(-5, 5);
    var y_start = height - bord_size - hud_size - player.h / 2;
    this.pos_start = createVector(x_start, y_start);
    this.pos_end = createVector(x_start + this.vel.x, y_start + this.vel.y);
    this.update = function () {
        this.pos_start.add(this.vel);
        this.pos_end.add(this.vel);
    }
    this.render = function () {
        image(img_bullet, this.pos_end.x, this.pos_end.y + img_point.height / 2, img_point.width, img_point.height);
        //        push();
        //        stroke(255, 0, 0);
        //        strokeWeight(1);
        //        line(this.pos_start.x, this.pos_start.y, this.pos_end.x, this.pos_end.y); //HITBOX
        //        pop();
    }
    this.hits = function (bubble) {
        var d = sqrt(sq(this.pos_end.x - bubble.pos.x) + sq(this.pos_end.y - bubble.pos.y));
        if (d <= bubble.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }
    this.offscreen = function () {
        if (this.pos_end.y <= bord_size) {
            this.vel.y = 0;
            return true;
        }
        else {
            return false;
        }
    }
}