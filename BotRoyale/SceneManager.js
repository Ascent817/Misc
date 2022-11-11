class Bot {
    constructor(position, sprite, controller, context) {
        this.position = position;
        this.sprite = sprite;
        this.controller = controller;
        this.context = context;
        this.moved = false;
        this.health = 100;
        this.lastShot = 100;
        this.canShoot = true;
    }

    draw() {
        if (this.lastShot > 0) {
            this.lastShot--;
            this.canShoot = false;
        } else {
            this.canShoot = true;
            this.lastShot = 100;
        }

        image(this.sprite, this.position.x - 25, this.position.y - 25, 50, 50);
        this.controller(this);
        this.moved = false;
    }

    move(vector) {

        if (this.moved) {
            return;
        } else {
            this.moved = true;
        }

        vector.normalize(10);
        this.position = this.position.add(vector);

        // Check if the bot is out of bounds
        if (this.position.x < 0) {
            this.position.x = 0;
        } else if (this.position.x > windowWidth) {
            this.position.x = windowWidth;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
        } else if (this.position.y > windowHeight) {
            this.position.y = windowHeight;
        }
    }

    shoot(vector) {
        if (!this.lastShot < 0) {
            return;
        } else {
            this.lastShot = 100;
        }
        console.log("Shoot");
        sync(new Laser(this.position, vector));
    }
}

class Laser {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.sprite = redLaserImage;
        this.damage = 5;
    }

    draw() {
        image(this.sprite, this.position.x, this.position.y);
        this.position = this.position.add(this.direction.normalize(5));
    }
}

let blueSpaceshipImage;
let redSpaceshipImage;
let blueLaserImage;
let redLaserImage;

let bots = [];
let lasers = [];

function sync(laser) {
    lasers.push(laser);
}

function setup() {
    rectMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    blueSpaceshipImage = loadImage("./assets/ufoBlue.png");
    redSpaceshipImage = loadImage("./assets/ufoRed.png");
    blueLaserImage = loadImage("./assets/laserBlue01.png");
    redLaserImage = loadImage("./assets/laserRed01.png");
    rectMode(CENTER);

    for (let i = 0; i < 16; i++) {
        bots.push(new Bot(new Vector2(random(50, windowWidth - 50), random(50, windowHeight - 50)), Math.random() > 0.5 ? blueSpaceshipImage : redSpaceshipImage, botController, bots));
    }

    function botController(bot) {
        let otherBots = bot.context.filter(b => b !== bot);
        let closestBot = otherBots.reduce((closest, current) => {
            let distanceToCurrent = Math.abs(bot.position.subtract(current.position).length());
            let distanceToClosest = Math.abs(bot.position.subtract(closest.position).length());
            return distanceToCurrent < distanceToClosest ? current : closest;
        });

        // Move the bot towards the closest bot if we are more than 200 pixels away, otherwise move away
        if (Math.abs(bot.position.subtract(closestBot.position).length()) > 300) {
            bot.move(closestBot.position.subtract(bot.position));
        } else {
            bot.move(bot.position.subtract(closestBot.position));
        }

        // Shoot the closest bot if we are less than 200 pixels away
        if (Math.abs(bot.position.subtract(closestBot.position).length()) < 200) {
            bot.shoot(closestBot.position.subtract(bot.position));
        }

        stroke(255);
        line(bot.position.x, bot.position.y, closestBot.position.x, closestBot.position.y);
    };
}

function draw() {
    background(0);
    bots.forEach(bot => bot.draw());
    lasers.forEach(laser => {
        laser.draw();

        // Check if the laser is out of bounds
        if (laser.position.x < 0 || laser.position.x > windowWidth || laser.position.y < 0 || laser.position.y > windowHeight) {
            lasers.splice(lasers.indexOf(laser), 1);
        }
    });
}