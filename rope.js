function Rope(xpos, yvel) {
    this.vel = createVector(0, yvel);
    this.color = floor(random(0, 10));
    var x_start = xpos;
    var y_start = height - bord_size - hud_size;
    this.pos_start = createVector(x_start, y_start);
    this.pos_end = createVector(x_start, y_start);
    this.update = function () {
        this.pos_end.add(this.vel);
    }
    this.render = function () {
        push();
        colorMode(HSB);
        stroke(this.color, 100, 100);
        strokeWeight(4);
        //line(this.pos_start.x, this.pos_start.y, this.pos_end.x, this.pos_end.y);
        //console.log(this.pos_start.y, this.pos_end.y);
        for (var i = this.pos_start.y; i >= this.pos_end.y; i--) {
            /////////
            temp_image = img_rope[i % img_rope.length];
            image(temp_image, this.pos_start.x, i, temp_image.width, temp_image.height);
        }
        pop();
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
    this.offscreen = function () {
        if (this.pos_end.y <= bord_size) {
            return true;
        }
        else {
            return false;
        }
    }
}