package genetic;

class Vector2D {
    public double x;
    public double y;

    public Vector2D(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public Vector2D add(Vector2D other) {
        return new Vector2D(x + other.x, y + other.y);
    }

    public Vector2D subtract(Vector2D other) {
        return new Vector2D(x - other.x, y - other.y);
    }

    public Vector2D multiply(double scalar) {
        return new Vector2D(x * scalar, y * scalar);
    }

    public boolean equals(Object other) {
        Vector2D otherVector = (Vector2D) other;
        return x == otherVector.x && y == otherVector.y;
    }

    public double magnitude() {
        return Math.sqrt(x * x + y * y);
    }

    public Vector2D normalize() {
        double magnitude = magnitude();
        return new Vector2D(x / magnitude, y / magnitude);
    }

    public double dot(Vector2D other) {
        return x * other.x + y * other.y;
    }

    public double angleBetween(Vector2D other) {
        return Math.acos(dot(other) / (magnitude() * other.magnitude()));
    }

    public String toString() {
        return "<" + x + ", " + y + ">";
    }
}
