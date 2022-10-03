import Component from "./Component.js";

class Collider extends Component {
    constructor(radius, parent, enabled = true) {
        super(parent, enabled);
        this.radius = radius;
    }
}

export default Collider;