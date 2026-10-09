// <<< ADD CONSTANTS HERE (if you need them)

function setup() {createCanvas(400, 500);
  angleMode(DEGREES);

  // 1. Stem
  noFill();
  stroke(60, 120, 20);
  strokeWeight(12);
  strokeCap(ROUND);
  arc(50, 70, 40, 130, 0, 80);

  // Remove outline for the flower head
  noStroke();

  // 2. Petals (5 petals drawn directly with manual coordinates)
  fill(150, 210, 20);
  circle(50, 30, 40); // Top
  circle(69, 44, 40); // Top-Right
  circle(62, 66, 40); // Bottom-Right
  circle(38, 66, 40); // Bottom-Left
  circle(31, 44, 40); // Top-Left

  // 3. Center (no outline)
  fill(255, 220, 0);
  circle(50, 50, 32);
 angleMode(DEGREES);

  // 1. Stem (thick green arc, centered at X = 150)
  noFill();
  stroke(60, 120, 20);
  strokeWeight(12);
  strokeCap(ROUND);
  arc(150, 70, 40, 130, 0, 80);

  // Black outline settings for petals
  stroke("black");
  strokeWeight(2);

  // 2. Petals (4 green circles with black outlines)
  fill(150, 210, 20);
  circle(170, 50, 40); // Right
  circle(130, 50, 40); // Left
  circle(150, 30, 40); // Top
  circle(150, 70, 40); // Bottom

  // Remove outline specifically for the yellow center
  noStroke();

  // 3. Center (yellow circle without black outline)
  fill(255, 220, 0);
  circle(150, 50, 32);
}
