class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        let length = this.length();
        if (length > 0) {
            this.divide(length);
        }
    }
}

export default Vector2;