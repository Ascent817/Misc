package genetic;

public class Main {
    public static void main(String[] args) {
        Display display = new Display();
        new javax.swing.Timer(1, event -> display.repaint()).start();
    }
}