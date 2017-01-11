function Explosion(size, pos, FC_beginning) {
    this.size = size;
    this.pos = pos.copy();
    this.timing = 20;
    this.FC_beginning = FC_beginning;
    this.FC_ending = this.FC_beginning + this.timing;
    //
    //
    //
    this.render = function () {
        push();
        var time_left = this.FC_ending - frameCount;
        var ratio_size = map(time_left, 0, this.timing, 3, 2);
        var ratio_alpha = floor(map(time_left, 0, this.timing, 4, 0));
        image(img_explosion[ratio_alpha], this.pos.x, this.pos.y, this.size * ratio_size, this.size * ratio_size);
        pop();
    }
}