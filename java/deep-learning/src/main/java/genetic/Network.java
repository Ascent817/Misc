package genetic;

public class Network {
    
    private Layer[] layers;
    
    public Network(int[] layerSizes) {
        layers = new Layer[layerSizes.length - 1];
        
    }
}