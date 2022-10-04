import Component from "./Component.js";

class Collider extends Component {
    constructor(radius, enabled = true) {
        super(enabled);
        this.radius = radius;
    }
}

export default Collider;