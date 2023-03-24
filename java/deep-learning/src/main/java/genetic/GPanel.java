package genetic;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

class GPanel extends JPanel implements ActionListener {

    Timer timer;
    double dt = 0.05;
    Ship[] ships;
    int arenaRadius = 500;

    public GPanel() {
        this.setBackground(new Color(33, 33, 33));

        this.ships = new Ship[1];

        for (int i = 0; i < ships.length; i++) {
            //ships[i] = new Ship(new Vector2D(this.getWidth()/2 + 2*arenaRadius*Math.random() - arenaRadius, this.getHeight()/2 + 2*arenaRadius*Math.random() - arenaRadius));
            System.out.println(this.getWidth() / 2);
            ships[i] = new Ship(new Vector2D(this.getWidth() / 2, this.getHeight() / 2));
        }

        timer = new Timer((int) (dt), this);
        timer.start();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        this.repaint();
    }

    public void paint(Graphics g) {
        super.paint(g);
        Graphics2D g2 = (Graphics2D) g;
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2.setColor(Color.black);

        int screenWidth = this.getWidth();
        int screenHeight = this.getHeight();
        Vector2D screenCenter = new Vector2D(screenWidth / 2, screenHeight / 2);

        g2.fillOval((int) screenCenter.x - arenaRadius, (int) screenCenter.y - arenaRadius, arenaRadius * 2, arenaRadius * 2);

        Toolkit.getDefaultToolkit().sync();
        for (int i = 0; i < ships.length; i++) {
            Ship ship = ships[i];
            ship.update(dt);
            ship.display(g2);

            // Keep the ship in bounds
            if (ship.position.subtract(screenCenter).magnitude() + ship.radius > arenaRadius) {
                double error = ship.position.subtract(screenCenter).magnitude() - arenaRadius;
                Vector2D normal = ship.position.subtract(screenCenter).normalize();
                double dotProduct = ship.velocity.dot(normal);
                Vector2D response = normal.multiply((ship.radius) + error);

                if (dotProduct > 0) {
                    ship.velocity = ship.velocity.subtract(normal.multiply(dotProduct));
                }

                ship.position = ship.position.subtract(response);
            }

            // Manage ship collisions
            for (int j = 0; j < ships.length; j++) {
                if (i != j) {
                    Ship otherShip = ships[j];
                    double distance = ship.position.subtract(otherShip.position).magnitude();

                    if (distance < ship.radius + otherShip.radius) {
                        ship.onCollision();

                        Vector2D normal = (ship.position.subtract(otherShip.position)).normalize();
                        double dotProduct = ship.velocity.dot(normal);
                        Vector2D response = normal.multiply((ship.radius + otherShip.radius) - distance);

                        if (dotProduct > 0) {
                            ship.velocity = ship.velocity.subtract(normal.multiply(dotProduct));
                        }

                        ship.position = ship.position.add(response.multiply(0.5));
                        otherShip.position = otherShip.position.subtract(response.multiply(0.5));
                    }
                }
            }
        }
    }
}