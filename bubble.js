function Bubble(size, pos, vel, color) {
    if (size) {
        this.size = size;
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.color = color;
        this.angle = random(0, TWO_PI);
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
        this.angle = random(0, TWO_PI);
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
                this.vel.x *= -1;
            }
        }
        if (this.pos.x < bord_size + this.size / 2) {
            this.pos.x = bord_size + this.size / 2;
            if (this.vel.x < 0) {
                this.vel.x *= -1;
            }
        }
        if (this.pos.y > height - bord_size - hud_size - this.size / 2) {
            this.pos.y = height - bord_size - hud_size - this.size / 2;
            if (this.vel.y > 0) {
                this.vel.y *= -1;
            }
        }
        if (this.pos.y < bord_size + this.size / 2) {
            this.pos.y = bord_size + this.size / 2;
            if (this.vel.y < 0) {
                this.vel.y *= -1;
            }
        }
    }
    this.hits_pl = function (platform) {
        if (this.pos.x + this.size / 2 >= platform.pos.x - platform.w / 2 && this.pos.x - this.size / 2 <= platform.pos.x + platform.w / 2) {
            if (this.pos.y + this.size / 2 >= platform.pos.y - platform.h / 2 && this.pos.y - this.size / 2 <= platform.pos.y + platform.h / 2) {
                this.vel.y *= -1;
                var fut_x = this.pos.x + this.vel.x;
                var fut_y = this.pos.y + this.vel.y;
                if (fut_x + this.size / 2 >= platform.pos.x - platform.w / 2 && fut_x - this.size / 2 <= platform.pos.x + platform.w / 2) {
                    if (fut_y + this.size / 2 >= platform.pos.y - platform.h / 2 && fut_y - this.size / 2 <= platform.pos.y + platform.h / 2) {
                        this.vel.y *= -1;
                        this.vel.x *= -1;
                    }
                }
            }
        }
    }
    this.render = function () {
        push();
        translate(this.pos.x, this.pos.y);
        if (frameCount > starting_FC + starting_delay) {
            this.angle += this.vel.x * 0.005;
        }
        rotate(this.angle);
        image(img_bubbles[this.color], 0, 0, this.size, this.size);
        //noFill();
        //ellipse(this.pos.x, this.pos.y, this.size);//HIT BOX
        pop();
    }
    this.hits = function (player) {
        var DeltaX = this.pos.x - max(player.pos.x - player.w / 2, min(this.pos.x, player.pos.x + player.w / 2));
        var DeltaY = this.pos.y - max(player.pos.y - player.h, min(this.pos.y, player.pos.y));
        var Delta = DeltaX * DeltaX + DeltaY * DeltaY;
        var test = (this.size / 2) * (this.size / 2)
        if (Delta <= test && !shield_on) {
            sound_dying.play();
            dead = true;
            lives -= 1;
            if (lives <= 0) {
                gameover = true;
                gameover_begin = true;
            }
            setup();
        }
    }
}