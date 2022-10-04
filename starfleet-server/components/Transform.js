import Component from "./Component.js";
import Vector2 from "../types/Vector2.js";

class Transform extends Component {
    constructor(position = new Vector2(0, 0), rotation = 0, scale = new Vector2(1, 1), enabled = true) {
        super(enabled);
        this.position = new Vector2(position.x, position.y);
        this.rotation = rotation;
        this.scale = new Vector2(scale.x, scale.y);
    }
}

export default Transform;