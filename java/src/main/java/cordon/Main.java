package cordon;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Node> nodes = new ArrayList<Node>();
        Node node1 = new Node(new Vector2D(300.0, 400.0));
        Node node2 = new Node(new Vector2D(200.0, 500.0));
        node1.connections.add(new Connection(node1, node2));

        nodes.add(node1);
        nodes.add(node2);

        // Display display = new Display(nodes);
    }
}