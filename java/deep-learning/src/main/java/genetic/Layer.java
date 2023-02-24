package genetic;

public class Layer {
    private int numInputs;
    private int numOutputs;

    private int[] weights;
    private int[][] biases;

    public Layer(int numInputs, int numOutputs) {
        this.numInputs = numInputs;
        this.numOutputs = numOutputs;

        this.weights = new int[numInputs * numOutputs];
        this.biases = new int[numOutputs][numInputs];
    }

    public int getNumInputs() {
        return numInputs;
    }

    public int getNumOutputs() {
        return numOutputs;
    }

    public int[] evaluate(int[] inputs) {
        int[] outputs = new int[numOutputs];

        for (int i = 0; i < numOutputs; i++) {
            int sum = 0;

            for (int j = 0; j < numInputs; j++) {
                sum += inputs[j] * weights[i * numInputs + j];
            }

            outputs[i] = sum + biases[i][0];
        }

        return outputs;
    }
}