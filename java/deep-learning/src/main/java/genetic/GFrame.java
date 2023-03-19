package genetic;

import javax.swing.JFrame;

import java.awt.Dimension;

class GFrame extends JFrame {

    GPanel panel;

    public GFrame() {
        super("Cordon Demo - Ascent817");

        this.panel = new GPanel();
        this.add(panel);
        this.setVisible(true);
        this.setExtendedState(getExtendedState() | JFrame.MAXIMIZED_BOTH);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setMinimumSize(new Dimension(800, 600));
    }
}