function setup() {// Background
background("lightblue");

// Stroke settings
stroke("black");
strokeWeight(1);

// 1. Ears
fill("lightgray");
triangle(25, 40, 35, 15, 45, 30); // Left ear
triangle(75, 40, 65, 15, 55, 30); // Right ear

// 2. Head
fill("lightgray");
circle(50, 50, 60); // Head (x: 50, y: 50, radius/diameter)

// 3. Eyes
fill("black");
circle(40, 45, 6); // Left eye
circle(60, 45, 6); // Right eye

// 4. Nose
fill("pink");
triangle(47, 52, 53, 52, 50, 57);

// 5. Mouth
line(50, 57, 50, 62);
line(50, 62, 42, 66);
line(50, 62, 58, 66);

// 6. Whiskers (Left)
line(20, 50, 35, 53);
line(20, 57, 35, 57);
line(20, 64, 35, 61);

// 7. Whiskers (Right)
line(80, 50, 65, 53);
line(80, 57, 65, 57);
line(80, 64, 65, 61);
}
