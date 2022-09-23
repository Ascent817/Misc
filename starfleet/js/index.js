class PhysicsEntity {
    constructor(id, x, y) {
        this.id = id;
        this.position = new Point(x, y);
        this.velocity = new Point(0, 0);
        this.acceleration = new Point(0, 0);
    }

    UpdatePosition() {
        this.acceleration = 0;
        this.velocity *= 0.99;
        this.velocity.normalize();
        this.position += this.velocity;
    }

    AddForce(force) {
        this.acceleration = force;
        this.velocity += this.acceleration;
    }
}

class Ship extends PhysicsEntity {
    constructor(id, x, y, maxAcceleration) {
        super(id, x, y);
        this.radius = 20;
        this.color = "white";
        this.sprite = new Path.Circle(this.position, this.radius);
        this.sprite.fillColor = this.color;
        this.maxAcceleration = maxAcceleration;
    }

    Update() {
        this.UpdatePosition();
        this.sprite.position = this.position;
    }
}