function setup() {

    createCanvas(600, 600)
    background("cyan")

}

function draw() {

    stroke("green")
    fill("purple")

    if(mouseIsPressed) {
        rect(mouseX, mouseY, 2, 2, 3)
    }
}

