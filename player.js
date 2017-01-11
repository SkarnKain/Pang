function Player(pos) {
    var max_vel = 7;
    var move_trigger = 0.25;
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
        this.runcd_R = 0;
        this.runcd_L = 0;
        this.orientation = "right";
    }
    //
    //
    //
    this.update = function () {
        var strength = 0.1;
        var drag = 0.3;
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
            if (this.orientation == "right") {
                cur_img_player = img_player_R[1];
            }
            else if (this.orientation == "left") {
                cur_img_player = img_player_L[1];
            }
            this.runcd_R = 0;
            this.runcd_L = 0;
        }
        else if (this.vel.x >= 0 && this.vel.x < move_trigger) {
            this.orientation = "right";
            cur_img_player = img_player_R[0];
            this.runcd_R = 0;
            this.runcd_L = 0;
        }
        else if (this.vel.x >= move_trigger) {
            this.orientation = "right";
            cur_img_player = img_player_R[2 + floor(this.runcd_R % (img_player_R.length - 2))];
            this.runcd_R += map(abs(this.vel.x), 0, max_vel, 0.05, 0.25);
            //this.runcd_R += 1 / 3;
            this.runcd_L = 0;
        }
        else if (this.vel.x >= -move_trigger && this.vel.x < 0) {
            this.orientation = "left";
            cur_img_player = img_player_L[0];
            this.runcd_R = 0;
            this.runcd_L = 0;
        }
        else {
            this.orientation = "left";
            cur_img_player = img_player_L[2 + floor(this.runcd_L % (img_player_L.length - 2))];
            this.runcd_R = 0;
            this.runcd_L += map(abs(this.vel.x), 0, max_vel, 0.05, 0.25);;
        }
        image(cur_img_player, this.pos.x, this.pos.y - this.h * 1.73 / 2 + 10, this.w * 6, this.h * 1.7);
        //        push();
        //        noFill();
        //        stroke(this.color);
        //        rect(this.pos.x, this.pos.y - this.h / 2, this.w, this.h); //HIT BOX
        //        pop();
        if (shield_on) {
            image(img_shield, this.pos.x, this.pos.y - this.h * 1.1 / 2, this.w * 5, this.h * 1.2);
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