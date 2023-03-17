package genetic;

import java.awt.*;
import javax.swing.*;

class Display extends JFrame {

    Graphics2D g2;
    Graphics g;
    AlphaComposite ac;
    GameObject[] gameObjects;

    public Display() {
        super("Cordon Demo - Ascent817");

        Canvas c = new Canvas();

        // set background
        c.setBackground(Color.black);

        add(c);
        setVisible(true);
        setExtendedState(getExtendedState() | JFrame.MAXIMIZED_BOTH);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setMinimumSize(new Dimension(800, 600));

        this.g2 = (Graphics2D) c.getGraphics();
        this.g = c.getGraphics();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        this.ac  = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1f);
        g2.setComposite(ac);

        this.gameObjects = new Ship[10];

        for(int i = 0; i < gameObjects.length; i++) {
            gameObjects[i] = new Ship(new Vector2D(Math.random() * 1000, Math.random() * 1000), Color.white);
        }
    }
    
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g2.fillRect(FRAMEBITS, ERROR, ALLBITS, ABORT);
        gameObjects[0].update(0.1, g2, this);
        Toolkit.getDefaultToolkit().sync();
        // for (int i = 0; i < gameObjects.length; i++) {
        //     gameObjects[i].update(0.1, g2, this);
        // }
    }
}