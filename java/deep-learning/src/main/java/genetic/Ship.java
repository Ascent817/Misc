package genetic;

import java.awt.*;

class Ship extends GameObject {
    Vector2D velocity = new Vector2D(0, 0);
    Vector2D acceleration = new Vector2D(0, 0);

    double rotation = 0.0;

    Color shipColor = new Color(255, 255, 255, 255);

    public Ship(Vector2D position, Color shipColor) {
        super(position);
        this.position = position;
        this.shipColor = shipColor;
    }

    @Override
    public void update(double dt, Graphics2D g2, Display display) {
        velocity = velocity.multiply(0.99);
        velocity = velocity.add(acceleration.multiply(dt));
        position = position.add(velocity.multiply(dt));
        acceleration = new Vector2D(0, 0);

        this.acceleration = new Vector2D(Math.random() * 100 - 50, Math.random() * 100 - 50);
        this.display(g2);

        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        } else if (this.position.x > display.getWidth()) {
            this.position.x = display.getWidth();
            this.velocity.x = 0;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        } else if (this.position.y > display.getHeight()) {
            this.position.y = display.getHeight();
            this.velocity.y = 0;
        }
    }

    public void display(Graphics2D g2) {
        g2.setColor(shipColor);
        g2.fillOval((int) position.x, (int) position.y, 20, 20);
    }
}