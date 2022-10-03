import Component from "./Component.js";

class Transform extends Component {
    constructor(position, rotation, scale, parent, enabled = true) {
        super(parent, enabled);
        this.position = new Vector2(position.x, position.y);
        this.rotation = new Vector2(rotation.x, rotation.y);
        this.scale = new Vector2(scale.x, scale.y);
    }
}

export default Transform;