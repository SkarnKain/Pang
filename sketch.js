var gravity, force, player;
var bubbles = [];
var ropes = [];
var bullets = [];
var bonuss = [];
var bonuss_taken = [];
var explosions = [];
var nb_bubbles = 0;
var max_ropes = 0;
var level = 0;
var dead;
var bonus_SP;
var img_bubbles = [];
var img_BG;
var cur_img_player;
var img_point;
var img_bonus_plus_1;
var img_bonus_minus_1;
var img_bonus_shield;
var img_bonus_metal_ropes;
var img_bonus_bullets;
var img_lives;
var img_shield;
var img_explosion;
var img_rope = [];
var img_bullet;
var img_metal_rope = [];
var img_player = [];
var bord_size = 25;
var hud_size = 125;
var checkbox_hitbox;
var checkbox_img;
var starting_FC;
var starting_delay;
var lives = 3;
var score = 0;
var bestscore = 0;
var bonus_lives = [[5000, false], [10000, false], [20000, false]];
var shield_on = false;
var metal_ropes_on = false;
var bullets_on = false;

function preload() {
    img_BG = loadImage("images/TajMahal.png");
    for (var i = 0; i < 5; i++) {
        img_player[i] = loadImage("images/player" + i + ".png");
    }
    cur_img_player = img_player[0];
    img_point = loadImage("images/point.png");
    img_bonus_plus_1 = loadImage("images/bonus_plus_1.png");
    img_bonus_minus_1 = loadImage("images/bonus_minus_1.png");
    img_bonus_shield = loadImage("images/bonus_shield.png");
    img_lives = loadImage("images/lives.png");
    img_shield = loadImage("images/shield.png");
    img_bonus_metal_ropes = loadImage("images/bonus_metal_ropes.png");
    img_bullet = loadImage("images/bullet.png");
    img_bonus_bullets = loadImage("images/bonus_bullets.png");
    img_explosion = loadImage("images/explosion.png");
    for (var i = 0; i < 5; i++) {
        img_bubbles[i] = loadImage("images/bubble" + i + ".png");
    }
    for (var i = 0; i < 4; i++) {
        img_rope[i] = loadImage("images/rope" + i + ".png");
    }
    for (var i = 0; i < 4; i++) {
        img_metal_rope[i] = loadImage("images/metal_rope" + i + ".png");
    }
}

function setup() {
    starting_FC = frameCount;
    starting_delay = 120;
    gravity = 0.125;
    bonus_SP = 100;
    createCanvas(1200, 750);
    //frameRate(20);
    imageMode(CENTER);
    rectMode(CENTER);
    if (dead && lives <= 0) {
        level = 1;
        lives = 3;
        score = 0;
        bonus_lives = [[5000, false], [10000, false], [20000, false]];
    }
    bubbles = [];
    ropes = [];
    bullets = [];
    bonuss = [];
    bonuss_taken = [];
    max_ropes = 1;
    if (!dead) {
        level += 1;
    }
    nb_bubbles = level + 1;
    for (var i = 0; i < nb_bubbles; i++) {
        bubbles.push(new Bubble());
    }
    dead = false;
    player = new Player();
}

function draw() {
    background(200, 200, 200);
    image(img_BG, width / 2, height / 2, width, height);
    Hud_draw();
    //rect(width / 2, height / 2 - hud_size / 2, width - 2 * bord_size, height - 2 * bord_size - hud_size); //HIT BOX
    force = createVector(0, gravity);
    max_ropes = 1;
    shield_on = false;
    metal_ropes_on = false;
    bullets_on = false;
    for (var i = bonuss_taken.length - 1; i >= 0; i--) {
        if (frameCount >= bonuss_taken[i].FC_ending) {
            bonuss_taken.splice(i, 1);
            break;
        }
        max_ropes += bonuss_taken[i].mod_ropes;
        if (bonuss_taken[i].type == "shield") {
            shield_on = true;
        }
        if (bonuss_taken[i].type == "metal_ropes") {
            metal_ropes_on = true;
        }
        if (bonuss_taken[i].type == "bullets") {
            bullets_on = true;
        }
    }
    for (var i = explosions.length - 1; i >= 0; i--) {
        explosions[i].update();
        explosions[i].render();
        if (frameCount >= explosions[i].FC_ending) {
            explosions.splice(i, 1);
            break;
        }
    }
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].size < 20) {
            bubbles.splice(i, 1);
        }
        else {
            if (frameCount > starting_FC + starting_delay) {
                bubbles[i].update();
            }
            bubbles[i].edges();
            bubbles[i].render();
            // TEST COLLISION BUBBLES-PLAYER - BEGINNING
            var DeltaX = bubbles[i].pos.x - max(player.pos.x - player.w / 2, min(bubbles[i].pos.x, player.pos.x + player.w / 2));
            var DeltaY = bubbles[i].pos.y - max(player.pos.y - player.h, min(bubbles[i].pos.y, player.pos.y));
            var Delta = DeltaX * DeltaX + DeltaY * DeltaY;
            var test = (bubbles[i].size / 2) * (bubbles[i].size / 2)
            if (Delta <= test && !shield_on) {
                dead = true;
                lives -= 1;
                setup();
            }
            // TEST COLLISION BUBBLES-PLAYER - END
        }
    }
    for (var i = 0; i < bonuss.length; i++) {
        if (frameCount >= bonuss[i].FC_ending) {
            bonuss.splice(i, 1);
            break;
        }
        if (frameCount > starting_FC + starting_delay) {
            bonuss[i].update();
        }
        bonuss[i].edges();
        bonuss[i].render();
        // TEST COLLISION BONUS-PLAYER - BEGINNING
        var test_y = false;
        var test_x = false;
        if ((bonuss[i].pos.y + bonuss[i].size / 2) >= player.pos.y - player.h / 2) {
            test_y = true;
        }
        if (abs(bonuss[i].pos.x - player.pos.x) <= bonuss[i].size / 2 + player.w / 2) {
            test_x = true;
        }
        if (test_y && test_x) {
            bonuss_taken.push(new Bonus_taken(bonuss[i].type, bonuss[i].mod_ropes, frameCount));
            bonuss.splice(i, 1);
        }
        // TEST COLLISION BONUS-PLAYER - END
    }
    for (var i = ropes.length - 1; i >= 0; i--) {
        if (frameCount > starting_FC + starting_delay) {
            ropes[i].update();
        }
        if ((ropes[i].offscreen() && !metal_ropes_on) || (metal_ropes_on && frameCount > ropes[i].FC_ending)) {
            ropes.splice(i, 1);
        }
        else {
            ropes[i].render();
            // TEST COLLISION ROPES-BUBBLES - BEGINNING
            for (var j = bubbles.length - 1; j >= 0; j--) {
                if (ropes[i].hits(bubbles[j])) {
                    var temp_vel_b1 = createVector(bubbles[j].vel.x * 1.05, -5);
                    var temp_vel_b2 = createVector(bubbles[j].vel.x * -1.05, -5);
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b1, bubbles[j].color));
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b2, bubbles[j].color));
                    pushbonus(j);
                    explosions.push(new Explosion(bubbles[j].size, bubbles[j].pos, frameCount));
                    bubbles.splice(j, 1);
                    if (!metal_ropes_on) {
                        ropes.splice(i, 1);
                    }
                    score += 100;
                    break;
                }
            }
            // TEST COLLISION ROPES-BUBBLES - END
        }
    }
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (frameCount > starting_FC + starting_delay) {
            bullets[i].update();
        }
        if (bullets[i].offscreen()) {
            bullets.splice(i, 1);
        }
        else {
            bullets[i].render();
            // TEST COLLISION BULLETS-BUBBLES - BEGINNING
            for (var j = bubbles.length - 1; j >= 0; j--) {
                if (bullets[i].hits(bubbles[j])) {
                    var temp_vel_b1 = createVector(bubbles[j].vel.x * 1.05, -5);
                    var temp_vel_b2 = createVector(bubbles[j].vel.x * -1.05, -5);
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b1, bubbles[j].color));
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b2, bubbles[j].color));
                    pushbonus(j);
                    explosions.push(new Explosion(bubbles[j].size, bubbles[j].pos, frameCount));
                    bubbles.splice(j, 1);
                    bullets.splice(i, 1);
                    score += 100;
                    break;
                }
            }
            // TEST COLLISION BULLETS-BUBBLES - END
        }
    }
    if (bubbles.length == 0) {
        setup()
    }
    if (frameCount > starting_FC + starting_delay) {
        player.update();
    }
    player.edges();
    player.render();
    is_mouse_pressed();
    for (var i = 0; i < bonus_lives.length; i++) {
        if (score >= bonus_lives[i][0] && !bonus_lives[i][1]) {
            lives += 1;
            bonus_lives[i][1] = true;
        }
    }
}

function pushbonus(j) {
    var rand_spawn = random(0, 100);
    var rand_type = random(0, 100);
    if (rand_spawn < bonus_SP && bonuss.length + bonuss_taken.length < 3) {
        if (rand_type >= 75) {
            bonuss.push(new Bonus(bubbles[j].pos, "plus_one", frameCount));
        }
        else if (rand_type < 75 && rand_type >= 50) {
            bonuss.push(new Bonus(bubbles[j].pos, "minus_one", frameCount));
        }
        else if (rand_type < 50 && rand_type >= 25) {
            bonuss.push(new Bonus(bubbles[j].pos, "shield", frameCount));
        }
        else if (rand_type < 25 && rand_type >= 10) {
            bonuss.push(new Bonus(bubbles[j].pos, "metal_ropes", frameCount));
        }
        else if (rand_type < 10) {
            bonuss.push(new Bonus(bubbles[j].pos, "bullets", frameCount));
        }
    }
}