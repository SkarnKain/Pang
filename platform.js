function Platform(pos, h, w, hp) {
    if (pos) {
        this.pos = pos.copy();
        this.h = h;
        this.w = w;
        this.hp = hp;
    }
    else {
        this.h = 20;
        this.w = random(50, 200);
        var x = random(this.w / 2 + bord_size, width - this.w / 2 - bord_size);
        var y = random(bord_size + 150, height - hud_size - this.w / 2 - player.h - 50);
        this.pos = createVector(x, y);
        this.hp = 2;
    }
    this.render = function () {
        push();
        var alpha_P = map(this.hp, 0, 4, 0, 255)
        //image(img_bubbles[this.color], this.pos.x, this.pos.y, this.size, this.size);
        fill(150, alpha_P);
        rect(this.pos.x, this.pos.y, this.w, this.h); //HIT BOX
        pop();
    }
}