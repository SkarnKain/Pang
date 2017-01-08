function mouseClicked() {
    if (ropes.length < max_ropes && frameCount > starting_FC + starting_delay && !this.isshooting && !bullets_on) {
        if (metal_ropes_on) {
            ropes.push(new Rope(player.pos.x, frameCount, "metal"));
        }
        else {
            ropes.push(new Rope(player.pos.x, frameCount, "classic"));
        }
        player.isshooting = true;
        player.shoot_time_end = frameCount + 20;
    }
}

function is_mouse_pressed() {
    if (bullets_on && mouseIsPressed) {
        bullets.push(new Bullet(player.pos.x));
        player.bullet_shooting = true;
    }
}