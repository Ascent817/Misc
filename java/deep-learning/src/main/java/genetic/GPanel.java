package genetic;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

class GPanel extends JPanel implements ActionListener {

    Timer timer;
    double dt = 0.05;
    Ship[] ships;

    public GPanel() {
        this.setBackground(new Color(33, 33, 33));

        this.ships = new Ship[10];

        for(int i = 0; i < ships.length; i++) {
            ships[i] = new Ship(new Vector2D(Math.random() * 1000, Math.random() * 1000));
        }

        timer = new Timer((int)(dt), this);
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

        Toolkit.getDefaultToolkit().sync();
        for (int i = 0; i < ships.length; i++) {
            Ship ship = ships[i];
            ship.update(dt);
            ship.display(g2);
            

            // Keep the ship in bounds
            if (ship.position.subtract(new Vector2D(this.getWidth() / 2, this.getHeight() / 2)).magnitude() > 500) {
                ship.position = ship.position.multiply(-1);
            }
        }
    }
}