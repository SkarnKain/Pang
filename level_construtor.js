function Level(bubbles_, platforms_) {
    for (var i = 0; i < bubbles_; i++) {
        bubbles.push(new Bubble());
    }
    for (var i = 0; i < platforms_; i++) {
        platforms.push(new Platform());
    }
}