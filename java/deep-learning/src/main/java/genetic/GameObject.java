package genetic;

import java.awt.Graphics2D;

class GameObject {
    Vector2D position = new Vector2D(0, 0);

    public GameObject() {
        this.position = new Vector2D(0, 0);
    }

    public GameObject(Vector2D position) {
        this.position = position;
    }

    public void update(double dt, Graphics2D g2, Display display) { }
}