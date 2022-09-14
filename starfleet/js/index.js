class Entity {
    constructor(id, type, x, y) {
        this.id = id;
        this.type = type;
        this.position = new Point(x, y);
        this.velocity = new Point(0, 0);
        this.acceleration = new Point(0, 0);
    }
}