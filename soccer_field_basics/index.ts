// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;

function setup() {createCanvas(700, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  // Green grass background
  background(0, 130, 0);

  // White line settings
  noFill();
  stroke(255);
  strokeWeight(3);

  // 1. Outer boundary line
  rect(width / 2, height / 2, 660, 460);

  // 2. Center line and center circle
  line(width / 2, 20, width / 2, height - 20);
  circle(width / 2, height / 2, 120);

  // Center spot
  fill(255);
  circle(width / 2, height / 2, 8);
  noFill();

  // 3. Left side (Penalty area, goal area, penalty spot, arc, and goal)
  rect(20 + 55, height / 2, 110, 260); // Penalty area
  rect(20 + 20, height / 2, 40, 130);  // Goal area
  
  // Left penalty arc
  arc(20 + 90, height / 2, 100, 100, -53, 53);
  
  // Left penalty spot
  fill(255);
  circle(20 + 90, height / 2, 6);
  noFill();

  // Left goal
  rect(10, height / 2, 20, 60);

  // 4. Right side (Penalty area, goal area, penalty spot, arc, and goal)
  rect(width - 20 - 55, height / 2, 110, 260); // Penalty area
  rect(width - 20 - 20, height / 2, 40, 130);  // Goal area
  
  // Right penalty arc
  arc(width - 20 - 90, height / 2, 100, 100, 127, 233);
  
  // Right penalty spot
  fill(255);
  circle(width - 20 - 90, height / 2, 6);
  noFill();

  // Right goal
  rect(width - 10, height / 2, 20, 60);

  // 5. Corner arcs
  arc(20, 20, 20, 20, 0, 90);
  arc(width - 20, 20, 20, 20, 90, 180);
  arc(20, height - 20, 20, 20, 270, 360);
  arc(width - 20, height - 20, 20, 20, 180, 270);
   
}
