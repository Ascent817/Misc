package cordon;

import java.util.ArrayList;

class Node {

    ArrayList<Connection> connections;
    Node parent;
    Vector2D position;

    double g;
    double h;
    double f;

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
        this.connections.add(new Connection(this, node));
        node.connections.add(new Connection(node, this));
    }
}