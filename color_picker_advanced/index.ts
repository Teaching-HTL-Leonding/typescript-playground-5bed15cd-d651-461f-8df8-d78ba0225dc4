let selectedHue: number = 0;
let selectedSaturation: number = 0;
let selectedBrightness: number = 100;

function setup(): void {
    createCanvas(360, 200);
    colorMode(HSB);
    noStroke();
}

function draw(): void {
    const currentHue: number = constrain(mouseX, 0, 360);
    const currentSaturation: number = constrain(mouseY, 0, 100);
    const currentBrightness: number = 100;

    fill(currentHue, currentSaturation, currentBrightness);
    rect(0, 0, width, height / 2);

    fill(selectedHue, selectedSaturation, selectedBrightness);
    rect(0, height / 2, width, height / 2);

    fill(0);
    textSize(14);
    text(`H: ${round(selectedHue)}, S: ${round(selectedSaturation)}, B: ${selectedBrightness}`, 5, height - 8);
}

function mouseClicked(): void {
    if (mouseY >= 0 && mouseY <= height / 2) {
        selectedHue = constrain(mouseX, 0, 360);
        selectedSaturation = constrain(mouseY, 0, 100);
    }
}