public class Main {

    public static void main(String[] args) {

        Pair<String, Integer> pair = new Pair<>("age", 25);

        System.out.println(pair.getKey());    // age
        System.out.println(pair.getValue());  // 25
        System.out.println(pair.swap());      // Pair(25, age)
    }
}
