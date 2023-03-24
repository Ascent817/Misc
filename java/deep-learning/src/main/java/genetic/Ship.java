package genetic;

import java.awt.*;

class Ship extends GameObject {
    Vector2D velocity = new Vector2D(0, 0);
    Vector2D acceleration = new Vector2D(0, 0);

    int radius = 10;
    Image shipImage;

    int maxHealth = 5000;
    int health = maxHealth;

    int maxBullets = 8;
    int bulletsLeft = maxBullets;

    Network AI;

    public Ship(Vector2D position) {
        super(position);
        this.position = position;
        this.shipImage = Toolkit.getDefaultToolkit().getImage("src/main/resources/ship.png");
        this.shipImage = shipImage.getScaledInstance(radius * 2, radius * 2, 0);
        int[] layers = {6, 14, 14, 4};
        this.AI = new Network(layers);
    }

    public void update(double dt) {
        velocity = velocity.multiply(0.99);
        velocity = velocity.add(acceleration.multiply(dt));
        position = position.add(velocity.multiply(dt));
        acceleration = new Vector2D(0, 0);

        // DEBUG_ONLY
        // addForce(new Vector2D(Math.random() * 50 - 25, Math.random() * 50 - 25));
    }

    public void onCollision() {
        health -= 1;
    }

    public void addForce(Vector2D force) {
        acceleration = acceleration.add(force);
    }

    public void Shoot(Vector2D target) {
        bulletsLeft--;
    }

    public void display(Graphics2D g2) {
        g2.drawImage(shipImage, (int) this.position.x - shipImage.getWidth(null) / 2,
                (int) this.position.y - shipImage.getHeight(null) / 2, null);
        g2.setColor(Color.white);
        Vector2D healthBarAnchor = this.position.add(new Vector2D(0, 25));
        GUtil.drawRect(g2, healthBarAnchor, maxHealth / 100, 10);
        g2.fillRect((int) healthBarAnchor.x  - maxHealth / 100 / 2, (int) healthBarAnchor.y - 5, health / 100, 10);
    }
}