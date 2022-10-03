const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        parent: 'yourgamediv',
        mode: Phaser.Scale.RESIZE,
        width: 800,
        height: 600
    },
    scene: [ Starfleet ]
};

let game = new Phaser.Game(config);