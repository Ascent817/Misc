package cordon;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Node> nodes = new ArrayList<Node>();
        Node node1 = new Node();
        Node node2 = new Node();
        node1.connections = new Connection[1];
        node1.connections[0] = new Connection(node1, node2, 1.0);
        node1.position = new Vector2D<Double>(300.0, 400.0);
        node1.position = new Vector2D<Double>(500.0, 600.0);

        nodes.add(node1);
        nodes.add(node2);

        Display display = new Display(nodes);
        System.out.println(display);
    }
}