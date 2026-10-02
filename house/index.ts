function setup() {// Create the canvas (German: "Leinwand")
    // Paramters are width and height
    createCanvas(400, 500);

    scale(2,2)

    // Fill color
    fill("red");
    // Draw a rectangle
    rect(45, 70, 70, 70);
    // Do not fill the following shapes
    noFill();
    // Fill color
    fill("brown");
    triangle(45, 70, 80, 20, 115, 70);
    // Do not fill the following shapes
    noFill();
    // Fill color
    fill("yellow");
    // Draw a rectangle
    rect(72.5, 110, 15, 30);
    // Do not fill the following shapes
    noFill();
    // Fill color
    fill("brown");
    // Draw a rectangle
    rect(135, 90, 15, 50);
    // Do not fill the following shapes
    noFill();
    // Fill color
    fill("green");
    // Draw a circle
    circle(125, 70, 50);
    // Draw a circle
    circle(160, 70, 50);
    // Draw a circle
    circle(142.5, 40, 50);




}
