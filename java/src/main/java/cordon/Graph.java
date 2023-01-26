package cordon;

class Graph {
    Connection connections[];
    Node nodes[];

    public Graph(Connection[] connections, Node[] nodes) {
        this.connections = connections;
        this.nodes = nodes;
    }
}