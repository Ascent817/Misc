package cordon;

import java.awt.*;
import java.util.ArrayList;

import javax.swing.*;

class Display extends JFrame {

    public Display(ArrayList<Node> nodes) {
        super("Cordon Demo - Ascent817");

        Canvas c = new Canvas() {
            public void paint(Graphics g) {
                Graphics2D g2 = (Graphics2D) g;
                g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            }
        };

        // set background
        c.setBackground(Color.black);

        add(c);
        setSize(400, 300);
        setVisible(true);
    }

    public static void drawNode(Graphics2D g2, Node node) {
        g2.setColor(Color.white);
        g2.fillOval(node.position.x.intValue(), node.position.y.intValue(), 10, 10);
    }
}