function mouseClicked() {
    if (ropes.length < max_ropes && frameCount > starting_FC + starting_delay && !this.isshooting) {
        if (metal_ropes_on) {
            ropes.push(new Rope(player.pos.x, -10, frameCount, "metal"));
        }
        else {
            ropes.push(new Rope(player.pos.x, -10, frameCount, "classic"));
        }
        player.isshooting = true;
        player.shoot_time_end = frameCount + 20;
    }
}