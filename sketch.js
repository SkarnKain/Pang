var gravity, force, player;
var bubbles = [];
var platforms = [];
var ropes = [];
var bullets = [];
var bonuss = [];
var bonuss_taken = [];
var explosions = [];
var max_ropes = 0;
var level = 0;
var levels = [];
var dead = true;
var bonus_SP;
var img_bubbles = [];
var img_BG = [];
var BG;
var cur_img_player;
var img_point;
var img_bonus_plus_1;
var img_bonus_minus_1;
var img_bonus_shield;
var img_bonus_metal_ropes;
var img_bonus_bullets;
var img_lives;
var img_shield;
var img_rope = [];
var img_bullet;
var img_metal_rope = [];
var img_player_R = [];
var img_player_L = [];
var img_explosion = [];
var img_platform_G = [];
var img_platform_B = [];
var img_platform_R = [];
var img_platform_Gr = [];
var sound_blop;
var sound_whip;
var sound_ting;
var sound_dying;
var sound_minigun_begin;
var sound_minigun;
var sound_minigun_end;
var musics = [];
var music;
var bord_size = 25;
var hud_size = 125;
var checkbox_hitbox;
var checkbox_img;
var starting_FC;
var starting_delay;
var lives = 0;
var score = 0;
var previous_score = 0;
var bestscore = 0;
var bonus_lives = [[5000, false], [10000, false], [20000, false]];
var shield_on = false;
var metal_ropes_on = false;
var bullets_on = false;
var minigun_beginning = false;
var minigun_beginning_timing = 0;
var minigun_timing = 0;
var minigun_ending = false;
var gameover = false;
var gameover_begin = false;
var current_FC;
var timing_FC;
var ending_FC;
var first_launch = true;

function preload() {
    // IMAGES
    /// BACKGROUNDS
    for (var i = 0; i <= 4; i++) {
        img_BG[i] = loadImage("images/BG/" + i + ".png");
    }
    /// PLAYER
    img_player_R[0] = loadImage("images/player/R/ST.png");
    img_player_R[1] = loadImage("images/player/R/SH.png");
    for (var i = 0; i <= 12; i++) {
        img_player_R[i + 2] = loadImage("images/player/R/RU/" + i + ".png");
    }
    img_player_L[0] = loadImage("images/player/L/ST.png");
    img_player_L[1] = loadImage("images/player/L/SH.png");
    for (var i = 0; i <= 12; i++) {
        img_player_L[i + 2] = loadImage("images/player/L/RU/" + i + ".png");
    }
    cur_img_player = img_player_R[0];
    /// BUBBLES
    for (var i = 0; i < 5; i++) {
        img_bubbles[i] = loadImage("images/bubble/" + i + ".png");
    }
    //PLATFORMS
    for (var i = 0; i < 7; i++) {
        img_platform_G[i] = loadImage("images/platform/G/" + i + ".png");
        img_platform_B[i] = loadImage("images/platform/B/" + i + ".png");
        img_platform_R[i] = loadImage("images/platform/R/" + i + ".png");
        img_platform_Gr[i] = loadImage("images/platform/Gr/" + i + ".png");
    }
    /// EXPLOSION
    for (var i = 0; i < 5; i++) {
        img_explosion[i] = loadImage("images/explosion/" + i + ".png");
    }
    /// ROPES
    img_point = loadImage("images/rope/point.png");
    for (var i = 0; i < 12; i++) {
        img_rope[i] = loadImage("images/rope/" + i + ".png");
    }
    for (var i = 0; i < 12; i++) {
        img_metal_rope[i] = loadImage("images/metal_rope/" + i + ".png");
    }
    /// BONUS
    img_bonus_plus_1 = loadImage("images/bonus/plus_1.png");
    img_bonus_minus_1 = loadImage("images/bonus/minus_1.png");
    img_bonus_shield = loadImage("images/bonus/shield.png");
    img_bonus_metal_ropes = loadImage("images/bonus/metal_ropes.png");
    img_bonus_bullets = loadImage("images/bonus/bullets.png");
    /// OTHERS
    img_lives = loadImage("images/others/lives.png");
    img_shield = loadImage("images/others/shield.png");
    img_bullet = loadImage("images/others/bullet.png");
    // SOUNDS
    sound_blop = loadSound('sounds/blop.mp3');
    sound_whip = loadSound('sounds/whip.mp3');
    sound_ting = loadSound('sounds/ting.mp3');
    sound_dying = loadSound('sounds/dying.mp3');
    sound_minigun_begin = loadSound('sounds/minigun_begin.wav');
    sound_minigun = loadSound('sounds/minigun.wav');
    sound_minigun_end = loadSound('sounds/minigun_end.wav');
    for (var i = 0; i < 3; i++) {
        musics[i] = loadSound('sounds/music' + i + '.mp3');
    }
}

function setup() {
    starting_FC = frameCount;
    starting_delay = 120;
    bonus_SP = 25;
    createCanvas(1200, 750);
    //frameRate(20);
    imageMode(CENTER);
    rectMode(CENTER);
    if (dead && lives <= 0) {
        level = 1;
        lives = 3;
        previous_score = score;
        score = 0;
        bonus_lives = [[5000, false], [10000, false], [20000, false], [30000, false], [40000, false], [50000, false]];
    }
    bubbles = [];
    platforms = [];
    ropes = [];
    bullets = [];
    bonuss = [];
    bonuss_taken = [];
    explosions = [];
    max_ropes = 1;
    if (!dead) {
        level += 1;
    }
    BG = level % img_BG.length;
    dead = false;
    player = new Player();
    Level_contructor(level);
}

function draw() {
    background(0, 0, 0);
    if (gameover && gameover_begin) {
        current_FC = frameCount;
        timing_FC = 300;
        ending_FC = current_FC + timing_FC;
        gameover_begin = false;
        music.stop();
        first_launch = true;
    }
    else if (gameover && current_FC < ending_FC) {
        current_FC = frameCount;
        push();
        fill(255, 255, 255);
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(60);
        text("GAME OVER", floor(width / 2), floor(height / 2 - 40));
        textSize(30);
        text("YOUR SCORE : " + previous_score, floor(width / 2), floor(height / 2 + 40));
        text("BEST SCORE : " + bestscore, floor(width / 2), floor(height / 2 + 80));
        pop();
        starting_FC = frameCount;
    }
    else {
        if (first_launch) {
            music = musics[floor(random(0, 3))];
            music.amp(0.5);
            music.loop();
            first_launch = false;
        }
        previous_score = 0;
        image(img_BG[BG], width / 2, height / 2, width, height);
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
            explosions[i].render();
            if (frameCount >= explosions[i].FC_ending) {
                explosions.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].render();
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
                for (var j = 0; j < platforms.length; j++) {
                    bubbles[i].hits_pl(platforms[j]);
                }
                bubbles[i].render();
                bubbles[i].hits(player); // TEST COLLISION BUBBLES-PLAYER
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
                sound_ting.play();
                bonuss_taken.push(new Bonus_taken(bonuss[i].type, bonuss[i].mod_ropes, frameCount));
                bonuss.splice(i, 1);
            }
            // TEST COLLISION BONUS-PLAYER - END
        }
        for (var i = ropes.length - 1; i >= 0; i--) {
            var rope_tobesplice = false;
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
                        var temp_size = bubbles[j].size / 2;
                        if (gravity == 0) {
                            var temp_vel_y = bubbles[j].vel.y;
                        }
                        else {
                            var temp_vel_y = -gravity * 40;
                        }
                        var temp_vel_b1 = createVector(abs(bubbles[j].vel.x) * 1.05, temp_vel_y);
                        var temp_vel_b2 = createVector(abs(bubbles[j].vel.x) * -1.05, temp_vel_y);
                        var temp_pos_b1 = createVector(bubbles[j].pos.x + temp_size / 2, bubbles[j].pos.y);
                        var temp_pos_b2 = createVector(bubbles[j].pos.x - temp_size / 2, bubbles[j].pos.y);
                        bubbles.push(new Bubble(temp_size, temp_pos_b1, temp_vel_b1, bubbles[j].color));
                        bubbles.push(new Bubble(temp_size, temp_pos_b2, temp_vel_b2, bubbles[j].color));
                        pushbonus(j);
                        explosions.push(new Explosion(bubbles[j].size, bubbles[j].pos, frameCount));
                        sound_blop.play();
                        bubbles.splice(j, 1);
                        if (!metal_ropes_on) {
                            rope_tobesplice = true;
                        }
                        score += 100;
                        break;
                    }
                }
                // TEST COLLISION ROPES-BUBBLES - END
                // TEST COLLISION ROPES-PLATFORM - BEGINNING
                for (var j = platforms.length - 1; j >= 0; j--) {
                    if (ropes[i].hits_pl(platforms[j])) {
                        if (platforms[j].hp != 99) {
                            platforms[j].hp += -1;
                            score += 50;
                        }
                        if (platforms[j].hp <= 0) {
                            platforms.splice(j, 1);
                        }
                        if (!metal_ropes_on) {
                            rope_tobesplice = true;
                        }
                        break;
                    }
                }
                // TEST COLLISION ROPES-PLATFORM - END
                if (rope_tobesplice) {
                    ropes.splice(i, 1);
                }
            }
        }
        for (var i = bullets.length - 1; i >= 0; i--) {
            var bullet_tobesplice = false;
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
                        sound_blop.play();
                        bubbles.splice(j, 1);
                        bullet_tobesplice = true;
                        score += 100;
                        break;
                    }
                }
                // TEST COLLISION BULLETS-PLATFORM - BEGINNING
                for (var j = platforms.length - 1; j >= 0; j--) {
                    if (bullets[i].hits_pl(platforms[j])) {
                        if (platforms[j].hp != 99) {
                            platforms[j].hp += -1;
                            score += 50;
                        }
                        if (platforms[j].hp <= 0) {
                            platforms.splice(j, 1);
                        }
                        bullet_tobesplice = true;
                        break;
                    }
                }
                // TEST COLLISION BULLETS-PLATFORM - END
                if (bullet_tobesplice) {
                    bullets.splice(i, 1);
                }
            }
            // TEST COLLISION BULLETS-BUBBLES - END
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