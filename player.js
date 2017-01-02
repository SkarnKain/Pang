function Player(pos) {
  
  if (pos) {
    this.pos = pos.copy();
  } else {
  this.pos = createVector(width / 2, height);
  }
  this.h = 120;
  this.w = 50;
  this.vel = createVector(0, 0);
  this.color = 10;


  this.update = function() {
      
    var strength = 0.1;
    var drag = 0.3;
    var max_vel =7;

    var target = mouseX - this.w / 2;
    var force = (target - this.pos.x) * strength;

    this.vel.x *= drag;
    this.vel.x += force;
    
    if (this.vel.x >= max_vel){this.vel.x = max_vel}
    if (this.vel.x <= -max_vel){this.vel.x = -max_vel}
      
    this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    fill(this.color);
    stroke(this.color);
    rect(this.pos.x, this.pos.y - this.h, this.w, this.h);
    pop();
  }

  this.edges = function() {
    if (this.pos.x > width - this.w / 2) {
      this.pos.x = width - this.w / 2;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
    }
  }

//  this.move = function(a) {
//    this.vel = a;
//  }
}