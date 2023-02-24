package cordon;

import java.util.HashMap;

class GraphGenerator {
    static HashMap<Vector2D, Node> generateGrid(int width, int height) {
        HashMap<Vector2D, Node> nodes = new HashMap<Vector2D, Node>();
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                Node node = new Node(new Vector2D(i, j));
                nodes.put(node.position, node);
                
                for (int k = -1; k <= 1; k++) {
                    for (int l = -1; l <= 1; l++) {
                        if (k == 0 && l == 0) {
                            continue;
                        }
                        
                        Vector2D position = new Vector2D(i + k, j + l);
                        if (nodes.containsKey(position)) {
                            node.addConnection(nodes.get(position));
                        }
                    }
                }
            }
        }
        return nodes;
    }
}