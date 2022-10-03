import Component from "./Component.js";
import Vector2 from "../types/Vector2.js";

class Rigidbody extends Component {
    constructor(mass, velocity, acceleration, parent, transform, collider, enabled = true) {
        super(parent, enabled);
        this.mass = mass;
        this.velocity = new Vector2(velocity.x, velocity.y);
        this.acceleration = new Vector2(acceleration.x, acceleration.y);
        this.transform = transform;
        this.collider = collider;
    }

    AddForce(force) {
        this.acceleration.Add(force);
    }
}

export default Rigidbody;