package genetic;

import java.awt.*;

class Ship extends GameObject {
    Vector2D velocity = new Vector2D(0, 0);
    Vector2D acceleration = new Vector2D(0, 0);

    double rotation = 0.0;

    int radius = 20;
    Image shipImage;

    public Ship(Vector2D position) {
        super(position);
        this.position = position;
        this.shipImage = Toolkit.getDefaultToolkit().getImage("src/main/resources/ship.png");
        this.shipImage = shipImage.getScaledInstance(radius * 2, radius * 2, 0);
    }

    public void update(double dt) {
        velocity = velocity.multiply(0.99);
        velocity = velocity.add(acceleration.multiply(dt));
        position = position.add(velocity.multiply(dt));
        acceleration = new Vector2D(0, 0);

        // DEBUG_ONLY
        acceleration = new Vector2D(Math.random() * 50 - 25, Math.random() * 50 - 25);
    }

    public void display(Graphics2D g2) {
        g2.drawImage(shipImage, (int) this.position.x - shipImage.getWidth(null) / 2,
                (int) this.position.y - shipImage.getHeight(null) / 2, null);
    }
}