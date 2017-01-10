function Rope(xpos, FC_beginning, type) {
    this.vel = createVector(0, -10);
    var x_start = xpos;
    var y_start = height - bord_size - hud_size;
    this.pos_start = createVector(x_start, y_start);
    this.pos_end = createVector(x_start, y_start - img_point.height);
    this.type = type;
    if (this.type == "classic") {
        this.timing = 0;
    }
    else if (this.type == "metal") {
        this.timing = 120;
    }
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
    this.update = function () {
        this.pos_end.add(this.vel);
    }
    this.render = function () {
        image(img_point, this.pos_end.x, this.pos_end.y + img_point.height / 2, img_point.width, img_point.height);
        for (var i = this.pos_start.y; i >= this.pos_end.y + img_point.height; i -= 2) {
            if (metal_ropes_on) {
                temp_image = img_metal_rope[i % img_rope.length];
            }
            else {
                temp_image = img_rope[i % img_rope.length];
            }
            image(temp_image, this.pos_start.x, i, temp_image.width, temp_image.height);
        }
        //        push();
        //        stroke(255, 0, 0);
        //        strokeWeight(1);
        //        line(this.pos_start.x, this.pos_start.y, this.pos_end.x, this.pos_end.y); //HITBOX
        //        pop();
    }
    this.hits = function (bubble) {
        if (bubble.pos.y > this.pos_end.y) {
            var d = abs(this.pos_end.x - bubble.pos.x);
        }
        else {
            var d = dist(this.pos_end.x, this.pos_end.y, bubble.pos.x, bubble.pos.y);
        }
        if (d <= bubble.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }
    this.hits_pl = function (platform) {
        if (this.pos_end.x > platform.pos.x - platform.w / 2 && this.pos_end.x < platform.pos.x + platform.w / 2 && this.pos_end.y < platform.pos.y + platform.h / 2) {
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