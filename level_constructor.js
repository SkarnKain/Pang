function Level_contructor(level) {
    var temp_size, temp_pos, temp_vel, temp_color, temp_orient, temp_hp, temp_nb_unit, temp_nb_plat, spacing;
    this.level = level;
    switch (this.level) {
    case 1:
        gravity = 0.125;
        temp_size = 100;
        temp_pos = createVector(0, 0);
        temp_vel = createVector(2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 2:
        gravity = 0.125;
        temp_size = 100;
        temp_pos = createVector(width, 0);
        temp_vel = createVector(-3, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        //
        temp_orient = "H";
        temp_hp = 1;
        temp_nb_unit = 6;
        temp_nb_plat = 6;
        var spacing = (width - (temp_nb_unit * temp_nb_plat * 25) - bord_size * 2) / temp_nb_plat;
        for (var i = 0; i < temp_nb_plat; i++) {
            temp_pos = createVector(bord_size + spacing / 2 + temp_nb_unit * 25 / 2 + (spacing + temp_nb_unit * 25) * i, 400);
            platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        }
        break;
    case 3:
        gravity = 0.125;
        temp_size = 50;
        temp_pos = createVector(width / 2, 150);
        temp_vel = createVector(2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 50;
        temp_pos = createVector(width / 2, 150);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        //
        temp_orient = "H";
        temp_nb_unit = 12;
        temp_hp = 3;
        temp_pos = createVector(width / 2, 100);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2, 400);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_orient = "V";
        temp_nb_unit = 12;
        temp_hp = 3;
        temp_pos = createVector(width / 2 + 150, 250);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 150, 250);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 4:
        gravity = 0.125;
        temp_size = 160;
        temp_pos = createVector(100, 105);
        temp_vel = createVector(3, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 160;
        temp_pos = createVector(260, 105);
        temp_vel = createVector(3, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 160;
        temp_pos = createVector(420, 105);
        temp_vel = createVector(3, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 5:
        gravity = 0.125;
        temp_size = 50;
        temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size / 2);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 50;
        temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 3 / 2);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 50;
        temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 5 / 2);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 50;
        temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 7 / 2);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 50;
        temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 9 / 2);
        temp_vel = createVector(-2, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 6:
        gravity = 0.125;
        temp_size = 100;
        temp_pos = createVector(465, 200);
        temp_vel = createVector(3.5, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 100;
        temp_pos = createVector(width - 465, 200);
        temp_vel = createVector(-3.5, 0);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        //
        temp_orient = "H";
        temp_nb_unit = 5;
        temp_hp = 99;
        temp_pos = createVector(width / 4, (height - hud_size) / 2 + 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 4, (height - hud_size) / 2 - 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 3 / 4, (height - hud_size) / 2 + 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 3 / 4, (height - hud_size) / 2 - 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_orient = "V";
        temp_pos = createVector(width / 2 + 12.5, (height - hud_size) / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 12.5, (height - hud_size) / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 12.5, (height - hud_size) * 3 / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 12.5, (height - hud_size) * 3 / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 7:
        gravity = 0.125;
        temp_size = 160;
        temp_pos = createVector(25 + temp_size / 2, 25 + temp_size / 2);
        temp_vel = createVector(3, 0);
        temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 160;
        temp_pos = createVector(width - 25 - temp_size / 2, 25 + temp_size / 2);
        temp_vel = createVector(-3, 0);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        //
        temp_orient = "H";
        temp_nb_unit = 1;
        temp_hp = 99;
        temp_pos = createVector(width * 1 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 2 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 3 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 4 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 5 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 6 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 7 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 8 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 9 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 10 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width * 11 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 8:
        gravity = 0.125;
        temp_size = 100;
        temp_pos = createVector(width / 2 + 25 * 3, bord_size + 25 / 2 + 25 * 3);
        temp_vel = createVector(2, 0);
        temp_color = 4;
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 3, bord_size + 25 / 2 + 25 * 3);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 9, bord_size + 25 / 2 + 25 * 3);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 9, bord_size + 25 / 2 + 25 * 3);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        temp_size = 80;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 8.5);
        temp_vel = createVector(2, 0);
        temp_color = 0;
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 4.7, bord_size + 25 / 2 + 25 * 8.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 4.7, bord_size + 25 / 2 + 25 * 8.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 9.7, bord_size + 25 / 2 + 25 * 8.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 9.7, bord_size + 25 / 2 + 25 * 8.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_size = 40;
        temp_pos = createVector(width / 2 + 25 * 1.5, bord_size + 25 / 2 + 25 * 12.5);
        temp_vel = createVector(2, 0);
        temp_color = 1;
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 1.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 4.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 4.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 7.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 7.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 + 25 * 10.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        temp_pos = createVector(width / 2 - 25 * 10.5, bord_size + 25 / 2 + 25 * 12.5);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        //
        //
        temp_orient = "H";
        temp_nb_unit = 5;
        temp_hp = 99;
        temp_pos = createVector(width / 2, bord_size + 25 / 2);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 5, bord_size + 25 / 2);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 5, bord_size + 25 / 2);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 10, bord_size + 25 / 2);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 10, bord_size + 25 / 2);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_hp = 3;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 6);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 5, bord_size + 25 / 2 + 25 * 6);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 5, bord_size + 25 / 2 + 25 * 6);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 10, bord_size + 25 / 2 + 25 * 6);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 10, bord_size + 25 / 2 + 25 * 6);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_hp = 2;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 11);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 5, bord_size + 25 / 2 + 25 * 11);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 5, bord_size + 25 / 2 + 25 * 11);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 10, bord_size + 25 / 2 + 25 * 11);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 10, bord_size + 25 / 2 + 25 * 11);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_hp = 1;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 14);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 5, bord_size + 25 / 2 + 25 * 14);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 5, bord_size + 25 / 2 + 25 * 14);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 10, bord_size + 25 / 2 + 25 * 14);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 10, bord_size + 25 / 2 + 25 * 14);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_orient = "V";
        temp_nb_unit = 5;
        temp_hp = 3;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 3);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 6, bord_size + 25 / 2 + 25 * 3);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 6, bord_size + 25 / 2 + 25 * 3);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 12, bord_size + 25 / 2 + 25 * 3);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 12, bord_size + 25 / 2 + 25 * 3);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_nb_unit = 4;
        temp_hp = 2;
        temp_pos = createVector(width / 2 + 25 * 2.5, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 2.5, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 7, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 7, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 12, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 12, bord_size + 25 / 2 + 25 * 8.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        //
        temp_nb_unit = 2;
        temp_hp = 1;
        temp_pos = createVector(width / 2, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 3, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 3, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 6, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 6, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 9, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 9, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 + 25 * 12, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        temp_pos = createVector(width / 2 - 25 * 12, bord_size + 25 / 2 + 25 * 12.5);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 9:
        gravity = 0;
        temp_size = 60;
        temp_vel = createVector(3, 3);
        temp_color = 2;
        for (var i = 0; i < 8; i++) {
            temp_pos = createVector(400 + 45 * i, 65 + 45 * i);
            bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        }
        temp_vel = createVector(-3, 3);
        temp_color = 3;
        for (var i = 0; i < 8; i++) {
            temp_pos = createVector(width - 400 - 45 * i, 65 + 45 * i);
            bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        }
        break;
    default:
        var nb_bubbles = this.level + 1;
        var nb_platforms = this.level + 2;
        for (var i = 0; i < nb_bubbles; i++) {
            bubbles.push(new Bubble());
        }
        for (var i = 0; i < nb_platforms; i++) {
            platforms.push(new Platform());
        }
    }
}