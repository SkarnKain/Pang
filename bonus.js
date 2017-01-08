function Bonus(pos, type, FC_beginning) {
    this.pos = pos.copy();
    this.vel = createVector(0, -5);
    this.type = type;
    if (this.type == "minus_one") {
        this.mod_ropes = -1;
    }
    else if (this.type == "plus_one") {
        this.mod_ropes = 1;
    }
    else {
        this.mod_ropes = 0;
    }
    this.size = 25;
    this.timing = 600;
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
    this.update = function () {
        this.vel.x += force.x;
        this.vel.y += force.y;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }
    this.edges = function () {
        if (this.pos.y > height - bord_size - hud_size - this.size / 2) {
            this.pos.y = height - bord_size - hud_size - this.size / 2;
            if (this.vel.y > 0) {
                this.vel.y *= 0
            };
        }
    }
    this.render = function () {
        push();
        var time_left = this.FC_ending - frameCount;
        var ratio = map(time_left, 0, this.timing, 0, 1);
        tint(255, 255 * ratio);
        if (this.type == "plus_one") {
            image(img_bonus_plus_1, this.pos.x, this.pos.y, this.size, this.size);
        }
        else if (this.type == "minus_one") {
            image(img_bonus_minus_1, this.pos.x, this.pos.y, this.size, this.size);
        }
        else if (this.type == "shield") {
            image(img_bonus_shield, this.pos.x, this.pos.y, this.size, this.size);
        }
        else if (this.type == "metal_ropes") {
            image(img_bonus_metal_ropes, this.pos.x, this.pos.y, this.size, this.size);
        }
        else if (this.type == "bullets") {
            image(img_bonus_bullets, this.pos.x, this.pos.y, this.size, this.size);
        }
        pop();
        //noFill();
        //rect(this.pos.x, this.pos.y, this.size, this.size); //HITBOX
    }
}