package genetic;

public class Network {
    
    private Layer[] layers;
    
    public Network(int[] layerSizes) {
        layers = new Layer[layerSizes.length - 1];
        
        for (int i = 0; i < layers.length; i++) {
            layers[i] = new Layer(layerSizes[i], layerSizes[i + 1]);
        }
    }
    
    public int[] evaluate(int[] inputs) {
        int[] outputs = inputs;
        
        for (Layer layer : layers) {
            outputs = layer.evaluate(outputs);
        }
        
        return outputs;
    }
}