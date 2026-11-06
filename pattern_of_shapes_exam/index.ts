function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  const smallerSide: number = min(width, height);

  stroke(180);
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  drawingContext.setLineDash([]);

  fill("blue");
  stroke("black");
  strokeWeight(2);
  rect(width * 0.3, height * 0.3, width * 0.4, height * 0.4);

  fill("white");
  ellipse(width * 0.5, height * 0.5, smallerSide * 0.4, smallerSide * 0.4);

  fill("gold");
  rect(width * 0.1, height * 0.1, width * 0.2, height * 0.2);
  rect(width * 0.7, height * 0.1, width * 0.2, height * 0.2);
  rect(width * 0.1, height * 0.7, width * 0.2, height * 0.2);
  rect(width * 0.7, height * 0.7, width * 0.2, height * 0.2);

  fill("red");
  ellipse(width * 0.5, height * 0.2, smallerSide * 0.2, smallerSide * 0.2);
  ellipse(width * 0.5, height * 0.8, smallerSide * 0.2, smallerSide * 0.2);
  ellipse(width * 0.2, height * 0.5, smallerSide * 0.2, smallerSide * 0.2);
  ellipse(width * 0.8, height * 0.5, smallerSide * 0.2, smallerSide * 0.2);

  ellipse(width * 0.5, height * 0.5, smallerSide * 0.1, smallerSide * 0.1);

  ellipse(mouseX, mouseY, smallerSide * 0.1, smallerSide * 0.1);
}