package cordon;



class Node {

    Connection connections[];
    Node parent;
    Vector2D<Double> position;

    double g;
    double h;
    double f;

    public Node(Connection[] connections, Node parent, double g, double h, double f) {
        this.connections = connections;
        this.parent = parent;
        this.g = g;
        this.h = h;
        this.f = f;
    }

    public Node(Connection[] connections, Node parent) {
        this.connections = connections;
        this.parent = parent;
    }

    public Node() { }
}