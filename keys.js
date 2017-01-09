function mouseClicked() {
    if (ropes.length < max_ropes && frameCount > starting_FC + starting_delay && !this.isshooting && !bullets_on) {
        sound_whip.play();
        if (metal_ropes_on) {
            ropes.push(new Rope(player.pos.x, frameCount, "metal"));
        }
        else {
            ropes.push(new Rope(player.pos.x, frameCount, "classic"));
        }
        player.isshooting = true;
        player.shoot_time_end = frameCount + 30;
    }
}

function is_mouse_pressed() {
    if (bullets_on && mouseIsPressed) {
        if (minigun_beginning == false) {
            sound_minigun_begin.setVolume(0.3);
            sound_minigun_begin.play();
            minigun_beginning = true;
            minigun_beginning_timing = frameCount + 30;
        }
        else if (frameCount > minigun_beginning_timing) {
            if (frameCount > minigun_timing) {
                bullets.push(new Bullet(player.pos.x));
                bullets.push(new Bullet(player.pos.x));
                sound_minigun.setVolume(0.3);
                sound_minigun.play();
                minigun_timing = frameCount + 3;
            }
        }
        player.bullet_shooting = true;
    }
}

function mouseReleased() {
    minigun_beginning = false;
    player.bullet_shooting = false;
    if (bullets_on) {
        sound_minigun_end.setVolume(0.4);
        sound_minigun_end.play();
    }
}