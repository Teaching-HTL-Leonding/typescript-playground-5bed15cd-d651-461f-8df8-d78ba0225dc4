let clickProtocol: string = "0/0";

function setup(): void {
    createCanvas(400, 400);
    background(200, 220, 240);

    fill(0);
    text(clickProtocol, 10, 30, 380, 360);
}

function mouseClicked(): void {
    fill(0, 150, 255, 150);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);

    clickProtocol = `${clickProtocol}, ${mouseX}/${mouseY}`;
    fill(0);
    text(clickProtocol, 10, 30, 380, 360);
}
