var size_bubble, pos_bubble, vel_bubble, color_bubble, gravity, force, player;
var bubbles = [];
var ropes = [];
var bonuss = [];
var nb_bubbles = 0;
var max_ropes = 0;
var level = 0;
var dead;
var bonus_SP;
var img_bubble_red;
var img_bubble_blue;
var img_BG;
var img_player;
var img_rope = [];
var bord_size = 25;
var hud_size = 125;

function preload() {
    img_BG = loadImage("images/TajMahal.png");
    img_bubble_red = loadImage("images/bubble_red.png");
    img_bubble_blue = loadImage("images/bubble_blue.png");
    img_player = loadImage("images/player.png");
    for (var i = 0; i < 4; i++) {
        img_rope[i] = loadImage("images/rope" + i + ".png");
    }
}

function setup() {
    createCanvas(1200, 750);
    frameRate(60);
    imageMode(CENTER);
    rectMode(CENTER);
    if (dead) {
        level = 0;
    }
    dead = false;
    bubbles = [];
    ropes = [];
    bonuss = [];
    max_ropes = 1;
    gravity = 0.125;
    bonus_SP = 100;
    level += 1;
    nb_bubbles = level + 1;
    for (var i = 0; i < nb_bubbles; i++) {
        bubbles.push(new Bubble());
    }
    player = new Player();
    size_bubble = 100;
    pos_bubble = createVector(size_bubble / 2, size_bubble / 2);
    vel_bubble = createVector(5, 0);
    color_bubble = [255, 0, 0];
    //bubbles.push(new Bubble(size_bubble, pos_bubble, vel_bubble, color_bubble));
}

function draw() { //draw is called every frame
    background(100, 200, 200);
    image(img_BG, width / 2, height / 2, width, height);
    force = createVector(0, gravity);
    player.update();
    player.edges();
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].size < 20) {
            bubbles.splice(i, 1);
        }
        else {
            bubbles[i].update();
            bubbles[i].edges();
            bubbles[i].render();
            var DeltaX = bubbles[i].pos.x - max(player.pos.x - player.w / 2, min(bubbles[i].pos.x, player.pos.x + player.w / 2));
            var DeltaY = bubbles[i].pos.y - max(player.pos.y - player.h, min(bubbles[i].pos.y, player.pos.y));
            var Delta = DeltaX * DeltaX + DeltaY * DeltaY;
            var test = (bubbles[i].size / 2) * (bubbles[i].size / 2)
            if (Delta <= test) {
                dead = true;
                setup();
            }
        }
    }
    for (var i = 0; i < bonuss.length; i++) {
        bonuss[i].update();
        bonuss[i].edges();
        bonuss[i].render();
        var test_y = false;
        var test_x = false;
        if ((bonuss[i].pos.y + bonuss[i].size / 2) >= player.pos.y - player.h / 2) {
            test_y = true;
        }
        if (abs(bonuss[i].pos.x - player.pos.x) <= bonuss[i].size / 2 + player.w / 2) {
            test_x = true;
        }
        if (test_y && test_x) {
            bonuss.splice(i, 1);
            max_ropes += 1;
        }
    }
    for (var i = ropes.length - 1; i >= 0; i--) {
        ropes[i].update();
        if (ropes[i].offscreen()) {
            ropes.splice(i, 1);
        }
        else {
            ropes[i].render();
            for (var j = bubbles.length - 1; j >= 0; j--) {
                if (ropes[i].hits(bubbles[j])) {
                    var temp_vel_b1 = createVector(bubbles[j].vel.x * 1.05, -5);
                    var temp_vel_b2 = createVector(bubbles[j].vel.x * -1.05, -5);
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b1, bubbles[j].color));
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b2, bubbles[j].color));
                    if (random(0, 100) < bonus_SP) {
                        bonuss.push(new Bonus(bubbles[j].pos, 10));
                    }
                    bubbles.splice(j, 1);
                    ropes.splice(i, 1);
                    break;
                }
            }
        }
    }
    if (bubbles.length == 0) {
        setup()
    }
    player.render();
}
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}