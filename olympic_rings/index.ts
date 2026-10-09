function setup() {
  // Disable fill so only the ring outlines are visible
noFill();

// Set the line thickness for all rings
strokeWeight(4);

// 1. Blue ring (top left)
stroke("blue");
circle(30, 40, 30);

// 2. Black ring (top center)
stroke("black");
circle(50, 40, 30);

// 3. Red ring (top right)
stroke("red");
circle(70, 40, 30);

// 4. Yellow ring (bottom left)
stroke("yellow");
circle(40, 52, 30);

// 5. Green ring (bottom right)
stroke("green");
circle(60, 52, 30);
}
