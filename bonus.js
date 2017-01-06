function Bonus(pos, type, FC_beginning) {
    this.pos = pos.copy();
    this.vel = createVector(0, -5);
    this.type = type;
    this.size = 25;
    this.FC_beginning = FC_beginning;
    this.timing = 600;
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
        ratio = map(time_left, 0, this.timing, 0, 1)
        if (this.type == 1) {
            tint(255, 255 * ratio);
            image(img_bonus_plus_1, this.pos.x, this.pos.y, this.size, this.size);
        }
        else {
            tint(255, 255 * ratio);
            image(img_bonus_minus_1, this.pos.x, this.pos.y, this.size, this.size);
        }
        pop();
        //noFill();
        //rect(this.pos.x, this.pos.y, this.size, this.size); //HITBOX
    }
}