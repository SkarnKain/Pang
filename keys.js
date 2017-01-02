function mouseClicked() {
    if (ropes.length < max_ropes) {
        ropes.push(new Rope(player.pos.x + player.w / 2, -10));
    }
}