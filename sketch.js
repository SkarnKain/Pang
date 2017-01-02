var size_bubble, pos_bubble, vel_bubble, color_bubble, gravity, force, player;
var bubbles = [];
var ropes = [];
var nb_bubbles = 0;
var max_ropes = 0;
var level = 0;
var dead;

function setup() {
    createCanvas(1200, 800);
    frameRate(60);
    
    if(dead) {
        level = 0;
    }
    
    dead = false;
    bubbles = [];
    ropes = [];
    gravity = 0.125;
    
    level += 1;
    nb_bubbles = level + 1;
    max_ropes = floor(level / 2) + 1;

    
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
    
    background(200,200,200); 
    
    force = createVector(0, gravity);
    
    player.update();
    player.edges();
    player.render();
    
    for (var i = 0; i < bubbles.length; i++) {
        if (bubbles[i].size < 20) {
            bubbles.splice(i, 1);
        } else{
            bubbles[i].update();
            bubbles[i].edges();
            bubbles[i].render();
            
            var DeltaX = bubbles[i].pos.x - max(player.pos.x, min(bubbles[i].pos.x, player.pos.x + player.w));
            var DeltaY = bubbles[i].pos.y - max(player.pos.y - player.h, min(bubbles[i].pos.y, player.pos.y));
            var Delta = DeltaX * DeltaX + DeltaY * DeltaY;
            var test = (bubbles[i].size / 2) * (bubbles[i].size / 2)
            if (Delta <= test) {
                dead = true;
                setup();
            }
        }
    }

    for (var i = ropes.length - 1; i >= 0; i--) {
        ropes[i].update();
        if (ropes[i].offscreen()){
            //splice(ropes[i]);
            ropes.splice(i, 1);
        } else {
            ropes[i].render();
            for (var j = bubbles.length - 1; j >= 0; j--){
                if (ropes[i].hits(bubbles[j])){
                    var temp_vel_b1 = createVector(bubbles[j].vel.x * 1.05, -5);
                    var temp_vel_b2 = createVector(bubbles[j].vel.x * -1.05, -5);
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b1, bubbles[j].color));
                    bubbles.push(new Bubble(bubbles[j].size / 2, bubbles[j].pos, temp_vel_b2, bubbles[j].color));
                    bubbles.splice(j, 1);
                    ropes.splice(i, 1);
                    break;
                }
            }
        }
    }
    if(bubbles.length == 0){setup()}
}




//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}