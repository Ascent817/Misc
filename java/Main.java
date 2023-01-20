public class Main {
    public static void main(String[] args) {
        System.out.println(roundToNearest(85.748321));
    }

    public static double roundToNearest(double x) {
        return (double)Math.round(x * 100) / 100;
    }
}