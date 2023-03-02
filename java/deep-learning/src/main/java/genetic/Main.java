package genetic;

import java.awt.*;
import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        Display display = new Display();
        Ship[] ships = new Ship[10];

        for(int i = 0; i < ships.length; i++) {
            ships[i] = new Ship(new Vector2D(Math.random() * 1000, Math.random() * 1000), Color.white);
        }

        new javax.swing.Timer(1000 / 60, event -> update(0.1, ships, display)).start();
    }

    public static void update(double dt, Ship[] ships, Display display) {
        display.g.clearRect(0, 0, display.getWidth(), display.getHeight());
        Toolkit.getDefaultToolkit().sync();
        for (int i = 0; i < ships.length; i++) {
            Ship ship = ships[i];
            ship.acceleration = new Vector2D(Math.random() * 100 - 50, Math.random() * 100 - 50);
            ship.update(dt);
            ship.display(display.g2);
            
            if (ship.position.x < 0) {
                ship.position.x = 0;
                ship.velocity.x = 0;
            } else if (ship.position.x > display.getWidth()) {
                ship.position.x = display.getWidth();
                ship.velocity.x = 0;
            }
            
            if (ship.position.y < 0) {
                ship.position.y = 0;
                ship.velocity.y = 0;
            } else if (ship.position.y > display.getHeight()) {
                ship.position.y = display.getHeight();
                ship.velocity.y = 0;
            }
        }
        display.repaint();
    }
}