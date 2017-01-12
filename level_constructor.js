function Level_contructor(level) {
    switch (this.level) {
    case 1:
        var temp_size = 100;
        var temp_pos = createVector(0, 0);
        var temp_vel = createVector(2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 2:
        var temp_size = 100;
        var temp_pos = createVector(width, 0);
        var temp_vel = createVector(-3, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_orient = "H";
        var temp_hp = 1;
        var temp_nb_unit = 6;
        var temp_nb_plat = 6;
        var spacing = (width - (temp_nb_unit * temp_nb_plat * 25) - bord_size * 2) / temp_nb_plat;
        for (var i = 0; i < temp_nb_plat; i++) {
            var temp_pos = createVector(bord_size + spacing / 2 + temp_nb_unit * 25 / 2 + (spacing + temp_nb_unit * 25) * i, 400);
            platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        }
        break;
    case 3:
        var temp_size = 50;
        var temp_pos = createVector(width / 2, 150);
        var temp_vel = createVector(2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 50;
        var temp_pos = createVector(width / 2, 150);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_orient = "H";
        var temp_nb_unit = 12;
        var temp_hp = 3;
        var temp_pos = createVector(width / 2, 100);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 2, 400);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_orient = "V";
        var temp_nb_unit = 12;
        var temp_hp = 3;
        var temp_pos = createVector(width / 2 + 150, 250);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 2 - 150, 250);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 4:
        var temp_size = 160;
        var temp_pos = createVector(100, 105);
        var temp_vel = createVector(3, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 160;
        var temp_pos = createVector(260, 105);
        var temp_vel = createVector(3, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 160;
        var temp_pos = createVector(420, 105);
        var temp_vel = createVector(3, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 5:
        var temp_size = 50;
        var temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size / 2);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 50;
        var temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 3 / 2);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 50;
        var temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 5 / 2);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 50;
        var temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 7 / 2);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 50;
        var temp_pos = createVector(width - bord_size - temp_size / 2, bord_size + temp_size * 9 / 2);
        var temp_vel = createVector(-2, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        break;
    case 6:
        var temp_size = 100;
        var temp_pos = createVector(465, 200);
        var temp_vel = createVector(3.5, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 100;
        var temp_pos = createVector(width - 465, 200);
        var temp_vel = createVector(-3.5, 0);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_orient = "H";
        var temp_nb_unit = 5;
        var temp_hp = 99;
        var temp_pos = createVector(width / 4, (height - hud_size) / 2 + 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 4, (height - hud_size) / 2 - 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 3 / 4, (height - hud_size) / 2 + 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 3 / 4, (height - hud_size) / 2 - 12.5 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_orient = "V";
        var temp_pos = createVector(width / 2 + 12.5, (height - hud_size) / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 2 - 12.5, (height - hud_size) / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 2 + 12.5, (height - hud_size) * 3 / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width / 2 - 12.5, (height - hud_size) * 3 / 4 - 70);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        break;
    case 7:
        var temp_size = 160;
        var temp_pos = createVector(25 + temp_size / 2, 25 + temp_size / 2);
        var temp_vel = createVector(3, 0);
        var temp_color = floor(random(0, 5));
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_size = 160;
        var temp_pos = createVector(width - 25 - temp_size / 2, 25 + temp_size / 2);
        var temp_vel = createVector(-3, 0);
        bubbles.push(new Bubble(temp_size, temp_pos, temp_vel, temp_color));
        var temp_orient = "H";
        var temp_nb_unit = 1;
        var temp_hp = 99;
        var temp_pos = createVector(width * 1 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 2 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 3 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 4 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 5 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 6 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 7 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 8 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 9 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 10 / 12, (height - hud_size) / 2 - 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
        var temp_pos = createVector(width * 11 / 12, (height - hud_size) / 2 + 50);
        platforms.push(new Platform(temp_pos, temp_orient, temp_nb_unit, temp_hp));
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