package cordon;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<Vector2D, Node> nodes = GraphGenerator.generateGrid(10, 10);
        
        Display display = new Display(nodes);
        
        for (Node node : nodes.values()) {
            display.drawNode(node);
        }
        System.out.println("Nodes: " + nodes.size());
    }
}