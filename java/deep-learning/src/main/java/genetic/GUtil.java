package genetic;

import java.awt.*;

class GUtil {
    public static void drawRect(Graphics2D g2, Vector2D position, int width, int height) {
        g2.drawRect((int) position.x - width / 2, (int) position.y - height / 2, width, height);
    }

    public static void fillRect(Graphics2D g2, Vector2D position, int width, int height) {
        g2.fillRect((int) position.x - width / 2, (int) position.y - height / 2, width, height);
    }
}