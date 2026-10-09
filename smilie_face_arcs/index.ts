function setup() {
  createCanvas(400, 400);
  // Background color
background(240);

// Stroke settings (black outline)
stroke(0);
strokeWeight(3);

// 1. Head (Yellow filled circle)
fill(255, 225, 0);
circle(50, 50, 80);

// 2. Eyes (Black circles)
fill(0);
circle(38, 38, 8); // Left eye
circle(62, 38, 8); // Right eye

// 3. Smile Mouth (Arc: x, y, width, height, startAngle, stopAngle)
noFill(); // Don't fill inside the mouth arc
arc(50, 50, 50, 50, 0.2 * PI, 0.8 * PI);
}
