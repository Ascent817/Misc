import java.util.Scanner;

class Helper {
    public static String input(String prompt) {
        Scanner scan = new Scanner(System.in);
        System.out.println(prompt);
        String response = scan.nextLine();
        scan.close();
        return response;
    }

    public static void log(String message) {
        System.out.println(message);
    }
}