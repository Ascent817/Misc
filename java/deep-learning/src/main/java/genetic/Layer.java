package genetic;

public class Layer {
    int numNodesIn, numNodesOut;
    double[][] weights;
    double[] biases;

    public Layer(int numNodesIn, int numNodesOut) {
        this.numNodesIn = numNodesIn;
        this.numNodesOut = numNodesOut;
        weights = new double[numNodesIn][numNodesOut];
        biases = new double[numNodesOut];
    }

    public double[] CalculateOutputs(double[] inputs) {
        double[] weightedInputs = new double[numNodesOut];
        for(int nodeOut = 0; nodeOut < numNodesOut; nodeOut++) {
            double weightedInput = biases[nodeOut];
            for(int nodeIn = 0; nodeIn < numNodesIn; nodeIn++) {
                weightedInput += inputs[nodeIn] * weights[nodeIn][nodeOut];
            }
            weightedInputs[nodeOut] = weightedInput;
        }
        return weightedInputs;
    }

    public static double activation(double input) {
        // Sigmoid
        return 1 / (1 + Math.exp(-input));

        // ReLU
        // return Math.max(0, input);

        // TanH
        // return Math.tanh(input);

        // Linear
        // return input;

        // Leaky ReLU
        // return Math.max(0.01 * input, input);

        // SoftPlus
        // return Math.log(1 + Math.exp(input));

        // SoftSign
        // return input / (1 + Math.abs(input));

        // ELU
        // return input > 0 ? input : Math.exp(input) - 1;

        // SELU
        // return input > 0 ? 1.0507 * input : 1.0507 * 1.67326 * (Math.exp(input) - 1);

        // Swish
        // return input / (1 + Math.exp(-input));

        // Bent Identity
        // return (Math.sqrt(input * input + 1) - 1) / 2 + input;

        // Gaussian
        // return Math.exp(-input * input);

        // Absolute
        // return Math.abs(input);

        // Inverse
        // return 1 / input;

        // Sine
        // return Math.sin(input);

        // Cosine
        // return Math.cos(input);

        // Sinc
        // return input == 0 ? 1 : Math.sin(input) / input;

        // Bent Identity
        // return (Math.sqrt(input * input + 1) - 1) / 2 + input;
    }
}