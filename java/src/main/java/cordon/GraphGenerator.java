package cordon;

import java.util.ArrayList;

class GraphGenerator {
    static ArrayList<Node> generateGrid(int width, int height) {
        ArrayList<Node> nodes = new ArrayList<Node>();
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                Node node = new Node(new Vector2D(i, j));
                nodes.add(node);
                
                node.addConnection(nodes.get(i + j * width - 1));
            }
        }
        return nodes;
    }
}