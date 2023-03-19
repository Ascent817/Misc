package genetic;

import java.awt.*;

public class Main extends Canvas {
    public static void main(String[] args) {
        //#region Initialize Graphics
        new GFrame();
        //#endregion

        //#region Initialize Gameworld
        Ship[] ships = new Ship[10];

        for(int i = 0; i < ships.length; i++) {
            ships[i] = new Ship(new Vector2D(Math.random() * 1000, Math.random() * 1000));
        }
        //#endregion
    }
}