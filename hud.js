function Hud_draw() {
    var scl_hud = hud_size / 5;
    for (var i = bonuss_taken.length - 1; i >= 0; i--) {
        var time_left = bonuss_taken[i].FC_ending - frameCount;
        var ratio = map(time_left, 0, bonuss_taken[i].timing, 0, 1);
        //
        push();
        rectMode(CORNER);
        imageMode(CORNER);
        noFill();
        stroke(255);
        rect(75, height - scl_hud * (4.7 - i * 1.5), 300, scl_hud);
        noStroke();
        if (bonuss_taken[i].type == "minus_one") {
            fill(255, 0, 0);
            image(img_bonus_minus_1, 25, height - scl_hud * (4.7 - i * 1.5), scl_hud, scl_hud);
        }
        else if (bonuss_taken[i].type == "plus_one") {
            fill(0, 255, 0);
            image(img_bonus_plus_1, 25, height - scl_hud * (4.7 - i * 1.5), scl_hud, scl_hud);
        }
        else if (bonuss_taken[i].type == "shield") {
            fill(44, 180, 160);
            image(img_bonus_shield, 25, height - scl_hud * (4.7 - i * 1.5), scl_hud, scl_hud);
        }
        rect(75, height - scl_hud * (4.7 - i * 1.5), 300 * ratio, scl_hud);
        pop();
        //
    }
    for (var i = 1; i <= lives; i++) {
        push();
        imageMode(CORNER);
        image(img_lives, width - scl_hud * i * 1.2 - scl_hud / 1.2, height - scl_hud * 4.5, scl_hud, scl_hud);
        pop();
        //
    }
    push();
    textSize(15);
    fill(200, 200, 200);
    textAlign(RIGHT);
    text("Score : " + score, width - scl_hud, height - scl_hud);
    if (score > bestscore) {
        bestscore = score;
    }
    text("Best : " + bestscore, width - scl_hud, height - 2 * scl_hud);
    fill(160, 160, 160);
    textSize(40);
    textAlign(CENTER);
    textStyle(BOLD);
    text("LEVEL " + level, floor(width / 2), floor(height / 2));
    pop();
}