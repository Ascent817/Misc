package cordon;

import java.util.ArrayList;

class Node {

    public ArrayList<Node> connections;
    public Node parent;
    public Vector2D position;

    public double g;
    public double h;
    public double f;

    public Node(Vector2D position, Node parent, double g, double h, double f) {
        this.position = position;
        this.parent = parent;
        this.g = g;
        this.h = h;
        this.f = f;
    }

    public Node(Vector2D position) {
        this.position = position;
        this.parent = null;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }

    public void addConnection(Node node) {
        this.connections.add(node);
    }
}