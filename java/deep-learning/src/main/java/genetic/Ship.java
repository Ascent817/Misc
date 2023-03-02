package genetic;

import java.awt.*;

class Ship extends GameObject {
    Vector2D velocity = new Vector2D(0, 0);
    Vector2D acceleration = new Vector2D(0, 0);

    double rotation = 0.0;

    Color shipColor = Color.white;
    
    public Ship(Vector2D position, Color shipColor) {
        super(position);
        this.position = position;
        this.shipColor = shipColor;
    }

    public void update(double dt) {
        velocity = velocity.multiply(0.99);
        velocity = velocity.add(acceleration.multiply(dt));
        position = position.add(velocity.multiply(dt));
        acceleration = new Vector2D(0, 0);
    }

    public void display(Graphics2D g2) {
        g2.setColor(shipColor);
        g2.fillOval((int) position.x, (int) position.y, 10, 10);
    }
}