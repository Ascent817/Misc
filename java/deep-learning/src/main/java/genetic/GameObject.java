package genetic;

class GameObject {
    Vector2D position = new Vector2D(0, 0);

    public GameObject() {
        this.position = new Vector2D(0, 0);
    }

    public GameObject(Vector2D position) {
        this.position = position;
    }
}