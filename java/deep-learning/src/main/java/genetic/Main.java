package genetic;

public class Main {
    public static void main(String[] args) {
        Network network = new Network(new int[] { 2, 3, 1 });
        System.out.println(network.evaluate(new int[] { 1, 1 })[0]);
    }
} 