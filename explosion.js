function Explosion(size, pos, FC_beginning) {
    this.size = size;
    this.pos = pos.copy();
    this.timing = 60;
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
    this.update = function () {
        //        this.vel.x += force.x;
        //        this.vel.y += force.y;
        //        this.pos.x += this.vel.x;
        //        this.pos.y += this.vel.y;
    }
    this.render = function () {
        push();
        var time_left = this.FC_ending - frameCount;
        var ratio_tint = map(time_left, 0, this.timing, 0, 1);
        var ratio_size = map(time_left, 0, this.timing, 3, 2);
        tint(255, 255 * ratio_tint);
        image(img_explosion, this.pos.x, this.pos.y, this.size * ratio_size, this.size * ratio_size);
        pop();
    }
}