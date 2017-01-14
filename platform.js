function Platform(pos, orient, nb_unit, hp) {
    this.unit = 25;
    if (pos) {
        this.pos = pos.copy();
        this.orient = orient;
        this.nb_unit = nb_unit;
        this.hp = hp;
        if (this.orient == "H") {
            this.h = this.unit;
            this.w = this.unit * this.nb_unit;
        }
        else if (this.orient == "V") {
            this.h = this.unit * this.nb_unit;
            this.w = this.unit;
        }
    }
    else {
        this.nb_unit = round(random(2, 10));
        this.orient = random(["H", "V"]);
        if (this.orient == "H") {
            this.h = this.unit;
            this.w = this.unit * this.nb_unit;
        }
        else if (this.orient == "V") {
            this.h = this.unit * this.nb_unit;
            this.w = this.unit;
        }
        var x = random(this.w / 2 + bord_size, width - this.w / 2 - bord_size);
        var y = random(bord_size + 150, height - hud_size - this.w / 2 - player.h - 50);
        this.pos = createVector(x, y);
        this.hp = 3;
    }
    //
    //
    //
    this.render = function () {
        push();
        var img_platform = [];
        if (this.hp == 3) {
            img_platform = img_platform_G;
        }
        else if (this.hp == 2) {
            img_platform = img_platform_B;
        }
        else if (this.hp == 1) {
            img_platform = img_platform_R;
        }
        else {
            img_platform = img_platform_Gr;
        }
        if (this.orient == "H") {
            if (this.nb_unit == 1) {
                image(img_platform[6], this.pos.x, this.pos.y, this.unit, this.unit);
            }
            else if (this.nb_unit % 2 == 1) {
                var decalunit = (this.nb_unit - 1) / 2;
                image(img_platform[0], this.pos.x - this.unit * decalunit, this.pos.y, this.unit, this.unit);
                image(img_platform[2], this.pos.x + this.unit * decalunit, this.pos.y, this.unit, this.unit);
                for (var i = -decalunit + 1; i <= decalunit - 1; i++) {
                    decalx = image(img_platform[1], this.pos.x + this.unit * i, this.pos.y, this.unit, this.unit);
                }
            }
            else {
                var decalunit = (this.nb_unit / 2) - 0.5;
                image(img_platform[0], this.pos.x - this.unit * decalunit, this.pos.y, this.unit, this.unit);
                image(img_platform[2], this.pos.x + this.unit * decalunit, this.pos.y, this.unit, this.unit);
                for (var i = -decalunit + 1; i <= decalunit - 1; i++) {
                    decalx = image(img_platform[1], this.pos.x + this.unit * i, this.pos.y, this.unit, this.unit);
                }
            }
        }
        else if (this.orient == "V") {
            if (this.nb_unit % 2 == 1) {
                var decalunit = (this.nb_unit - 1) / 2;
                image(img_platform[3], this.pos.x, this.pos.y - this.unit * decalunit, this.unit, this.unit);
                image(img_platform[5], this.pos.x, this.pos.y + this.unit * decalunit, this.unit, this.unit);
                for (var i = -decalunit + 1; i <= decalunit - 1; i++) {
                    decalx = image(img_platform[4], this.pos.x, this.pos.y + this.unit * i, this.unit, this.unit);
                }
            }
            else {
                var decalunit = (this.nb_unit / 2) - 0.5;
                image(img_platform[3], this.pos.x, this.pos.y - this.unit * decalunit, this.unit, this.unit);
                image(img_platform[5], this.pos.x, this.pos.y + this.unit * decalunit, this.unit, this.unit);
                for (var i = -decalunit + 1; i <= decalunit - 1; i++) {
                    decalx = image(img_platform[4], this.pos.x, this.pos.y + this.unit * i, this.unit, this.unit);
                }
            }
        }
        //        noFill();
        //        stroke(255);
        //        rect(this.pos.x, this.pos.y, this.w, this.h); //HIT BOX
        pop();
    }
}