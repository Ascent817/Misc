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
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        this.g2 = (Graphics2D) c.getGraphics();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
    }

    public void drawNode(Node node) {
        System.out.println("Drawing node #" + ((node.position.x * 10) + node.position.y));
        g2.setColor(Color.white);
        g2.fillOval((int) node.position.x * 50, (int) node.position.y * 50, 10, 10);

        if (node.connections == null) {
            return;
        }

        for (Node neighbor : node.connections) {
            g2.drawLine((int) node.position.x * 50, (int) node.position.y * 50, (int) neighbor.position.x * 50, (int) neighbor.position.y * 50);
        }
    }
}