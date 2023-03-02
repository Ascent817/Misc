package genetic;

import java.awt.*;
import javax.swing.*;

class Display extends JFrame {

    Graphics2D g2;
    Graphics g;

    public Display() {
        super("Cordon Demo - Ascent817");

        Canvas c = new Canvas();

        // set background
        c.setBackground(Color.black);

        add(c);
        setVisible(true);
        setExtendedState(getExtendedState() | JFrame.MAXIMIZED_BOTH);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setMinimumSize(new Dimension(80, 60));

        this.g2 = (Graphics2D) c.getGraphics();
        this.g = c.getGraphics();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
    }
    
    @Override
    public void paint(Graphics g) {
        super.paint(g);
    }
}