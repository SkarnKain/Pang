function Player(pos) {
    if (pos) {
        this.pos = pos.copy();
    }
    else {
        this.pos = createVector(width / 2, height - bord_size - hud_size);
        this.h = 100;
        this.w = 25;
        this.vel = createVector(0, 0);
        this.color = 10;
        this.isshooting = false;
        this.bullet_shooting = false;
        this.shoot_time_end = 0;
    }
    this.update = function () {
        var strength = 0.1;
        var drag = 0.3;
        var max_vel = 7;
        var target = mouseX;
        var force = (target - this.pos.x) * strength;
        if (!this.isshooting) {
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
        if (this.shoot_time_end <= frameCount) {
            this.isshooting = false;
        }
    }
    this.render = function () {
        if (this.isshooting || this.bullet_shooting) {
            cur_img_player = img_player[4];
        }
        else if (this.vel.x >= 0 && this.vel.x < 1) {
            cur_img_player = img_player[0];
        }
        else if (this.vel.x >= 1) {
            cur_img_player = img_player[2];
        }
        else if (this.vel.x >= -1 && this.vel.x < 0) {
            cur_img_player = img_player[1];
        }
        else {
            cur_img_player = img_player[3];
        }
        image(cur_img_player, this.pos.x, this.pos.y - this.h * 1.1 / 2, this.w * 3, this.h * 1.1);
//        push();
//        noFill();
//        stroke(this.color);
//        rect(this.pos.x, this.pos.y - this.h / 2, this.w, this.h); //HIT BOX
//        pop();
        if(shield_on){
            push();
            tint(255, 130);
            image(img_shield, this.pos.x, this.pos.y - this.h * 1.1 / 2, this.w * 5, this.h * 1.2);
            pop();
        }
        
        
    }
    this.edges = function () {
        if (this.pos.x + this.w / 2 + bord_size > width) {
            this.pos.x = width - this.w / 2 - bord_size;
        }
        else if (this.pos.x - this.w / 2 < bord_size) {
            this.pos.x = this.w / 2 + bord_size;
        }
    }
}