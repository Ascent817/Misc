package cordon;

import java.awt.*;
import java.util.HashMap;

import javax.swing.*;

class Display extends JFrame {

    Graphics2D g2;

    public Display(HashMap<Vector2D, Node> nodes) {
        super("Cordon Demo - Ascent817");

        Canvas c = new Canvas();

        // set background
        c.setBackground(Color.black);

        add(c);
        setVisible(true);
        setExtendedState(getExtendedState() | JFrame.MAXIMIZED_BOTH);

        this.g2 = (Graphics2D) c.getGraphics();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
    }

    public void drawNode(Node node) {
        g2.setColor(Color.white);
        g2.fillOval((int) node.position.x * 50, (int) node.position.y * 50, 10, 10);
        System.out.println(node.connections);
        for (Node neighbor : node.connections) {
            // g2.drawLine((int) node.position.x * 50, (int) node.position.y * 50, (int) connection.position.x * 50, (int) connection.position.y * 50);
        }

    }
}