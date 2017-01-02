// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/hacZU523FyM

function Bubble(size, pos, vel, color) {
  
    if (size) {
        this.size = size;
        this.pos = pos.copy();
        this.vel = vel.copy();
        this.color = color;
    } else {
        var x = random([0, width]);
        var y = random(0, height / 2);
        this.pos = createVector(x, y);
        this.size = random(50, 100);
        if (x == 0){
            var temp_vel = random(4, 7);
        } else {
            var temp_vel = random(-7, -4);
        }
        this.vel = createVector(temp_vel, 0);
        this.color = random(0, 100);
    }
    

  this.update = function() {
    this.vel.x += force.x;
    this.vel.y += force.y;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    
    //console.log(this.pos);
  }

  this.edges = function() {
    if (this.pos.x > width - this.size / 2) {
        this.pos.x = width - this.size / 2;
        if (this.vel.x > 0) {this.vel.x *= -1};
    }
    if (this.pos.x < 0 + this.size / 2) {
        this.pos.x = 0 + this.size / 2;
        if (this.vel.x < 0) {this.vel.x *= -1};
    }
    if (this.pos.y > height - this.size / 2) {
        this.pos.y = height - this.size / 2;
        if (this.vel.y > 0) {this.vel.y *= -1};
    }
    if (this.pos.y < 0 + this.size / 2) {
        this.pos.y = 0 + this.size / 2;
        if (this.vel.y < 0) {this.vel.y *= -1};
    }
  }
  
  this.render = function() {
    push();
      
    colorMode(HSB, 100);
    noStroke();
    var hue = 0;
    var decal = 0;
      
    hue = 100;
    decal += 0;
    fill(this.color, hue, 100 - hue);
    ellipse(this.pos.x, this.pos.y, this.size / (1 + decal));
    
    hue = 80;
    decal += 0.05;
    fill(this.color, hue, 100 - hue);
    ellipse(this.pos.x, this.pos.y, this.size / (1 + decal));
    
    hue = 60;
    decal += 0.1;
    fill(this.color, hue, 100 - hue);
    ellipse(this.pos.x, this.pos.y, this.size / (1 + decal));
      
    hue = 40;
    decal += 0.1;
    fill(this.color, hue, 100 - hue);
    ellipse(this.pos.x, this.pos.y, this.size / (1 + decal));

    hue = 20;
    decal += 0.3;
    fill(this.color, hue, 100 - hue);
    ellipse(this.pos.x, this.pos.y, this.size / (1 + decal));
      
    pop();
  }

}