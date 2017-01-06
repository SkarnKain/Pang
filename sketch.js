var gravity, force, player;
var bubbles = [];
var ropes = [];
var bonuss = [];
var bonuss_taken = [];
var nb_bubbles = 0;
var max_ropes = 0;
var level = 0;
var dead;
var bonus_SP;
//var img_bubble_red;
//var img_bubble_blue;
var img_bubbles = [];
var img_BG;
var img_player;
var img_point;
var img_bonus_plus_1;
var img_bonus_minus_1;
var img_lives;
var img_rope = [];
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

function preload() {
    img_BG = loadImage("images/TajMahal.png");
    //    img_bubble_red = loadImage("images/bubble_red.png");
    //    img_bubble_blue = loadImage("images/bubble_blue.png");
    img_player = loadImage("images/player.png");
    img_point = loadImage("images/point.png");
    img_bonus_plus_1 = loadImage("images/bonus_plus_1.png");
    img_bonus_minus_1 = loadImage("images/bonus_minus_1.png");
    img_lives = loadImage("images/lives.png");
    for (var i = 0; i < 5; i++) {
        img_bubbles[i] = loadImage("images/bubble" + i + ".png");
    }
    for (var i = 0; i < 4; i++) {
        img_rope[i] = loadImage("images/rope" + i + ".png");
    }
}

function setup() {
    starting_FC = frameCount;
    starting_delay = 120;
    gravity = 0.125;
    bonus_SP = 25;
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
    for (var i = bonuss_taken.length - 1; i >= 0; i--) {
        if (frameCount >= bonuss_taken[i].FC_ending) {
            bonuss_taken.splice(i, 1);
            break;
        }
        max_ropes += bonuss_taken[i].type;
    }
    //
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
            if (Delta <= test) {
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
            bonuss_taken.push(new Bonus_taken(bonuss[i].type, frameCount));
            bonuss.splice(i, 1);
        }
        // TEST COLLISION BONUS-PLAYER - END
    }
    for (var i = ropes.length - 1; i >= 0; i--) {
        if (frameCount > starting_FC + starting_delay) {
            ropes[i].update();
        }
        if (ropes[i].offscreen()) {
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
                    if (random(0, 100) < bonus_SP && bonuss.length + bonuss_taken.length < 3) {
                        if (random(0, 100) < 50) {
                            bonuss.push(new Bonus(bubbles[j].pos, 1, frameCount));
                        }
                        else {
                            bonuss.push(new Bonus(bubbles[j].pos, -1, frameCount));
                        }
                    }
                    bubbles.splice(j, 1);
                    ropes.splice(i, 1);
                    score += 100;
                    break;
                }
            }
            // TEST COLLISION ROPES-BUBBLES - END
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
    for (var i = 0; i < bonus_lives.length; i++) {
        if (score >= bonus_lives[i][0] && !bonus_lives[i][1]) {
            lives += 1;
            bonus_lives[i][1] = true;
        }
    }
}