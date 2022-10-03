class Starfleet extends Phaser.Scene {
    constructor() {
        super({ key: 'Starfleet' });
    }

    preload() {
        this.load.image('ship', 'assets/ship.png');
    }

    create() {
        this.ship = this.physics.add.sprite(400, 300, 'ship');
    }
}