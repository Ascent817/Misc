class Bot {
    constructor(x, y, controller, sprite) {
        this.x = x;
        this.y = y;
        this.controller = controller;
        this.sprite = sprite;
    }

    draw() {
        image(this.sprite, this.x, this.y, 50, 50);
    }
}

let blueSpaceshipImage;
let redSpaceshipImage;
let blueLaserImage;
let redLaserImage;

let blueSpaceship;

function setup() {
    createCanvas(windowWidth, windowHeight);
    blueSpaceshipImage = loadImage("./assets/ufoBlue.png");
    redSpaceshipImage = loadImage("./assets/ufoRed.png");
    blueLaserImage = loadImage("./assets/laserBlue01.png");
    redLaserImage = loadImage("./assets/laserRed01.png");
    rectMode(CENTER);

    blueSpaceship = new Bot(100, 100, null, blueSpaceshipImage);
}

function draw() {
    background(0);
    blueSpaceship.draw();
}