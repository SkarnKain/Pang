function mouseClicked() {
    if (ropes.length < max_ropes && frameCount > starting_FC + starting_delay) {
        ropes.push(new Rope(player.pos.x, -10));
    }
}