class Starfleet extends Phaser.Scene {
    constructor() {
        super({ key: 'Starfleet' });
        this.socket = io("http://localhost:3000");
        this.gameObjects = {};
    }

    preload() {
        this.load.image('ship', 'assets/ship.png');
    }

    create() {
        this.socket.on("connect", () => {
            console.log(this.socket.id);
        });
        
        this.socket.on("update", (data) => {
            console.log(data);
            Object.keys(data.gameObjects).forEach((key) => {
                if (key in this.gameObjects) {
                    this.gameObjects[key].x = data.gameObjects[key].x;
                    this.gameObjects[key].y = data.gameObjects[key].y;
                } else {
                    this.gameObjects[key] = this.add.image(data.gameObjects[key].x, data.gameObjects[key].y, 'ship');
                }
            });
        });
    }

    update() {
        Object.keys(this.gameObjects).forEach((key) => {
            // this.gameObjects[key].x += 1;
            // this.gameObjects[key].y += 1;
        });
    }
}