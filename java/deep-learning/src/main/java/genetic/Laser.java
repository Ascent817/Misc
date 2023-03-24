package genetic;

import java.awt.Color;
import java.awt.Graphics2D;

class Laser extends GameObject {

    Vector2D velocity = new Vector2D(0, 0);
    int speed = 10;

    public Laser(Vector2D position, Vector2D direction) {
        super(position);
        this.velocity = direction.multiply(speed);
    }

    public void update(double dt) {
        position = position.add(velocity.multiply(dt));
    }

    public void display(Graphics2D g2) {
        g2.setColor(Color.RED);
        g2.fillOval((int) position.x - 5, (int) position.y - 5, 10, 10);
    }
}