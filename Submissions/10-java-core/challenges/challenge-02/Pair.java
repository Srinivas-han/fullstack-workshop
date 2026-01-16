package Assignments;

import java.util.Objects;

public class Pair<K, V> {

    private final K key;
    private final V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

    public Pair<V, K> swap() {
        return new Pair<>(value, key);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Pair<?, ?>)) return false;
        Pair<?, ?> pair = (Pair<?, ?>) o;
        return Objects.equals(key, pair.key) &&
               Objects.equals(value, pair.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key, value);
    }

    @Override
    public String toString() {
        return "Pair[" + key + ", " + value + "]";
    }


    public static void main(String[] args) {

        Pair<String, Integer> pair = new Pair<>("age", 25);

        System.out.println(pair.getKey());    // age
        System.out.println(pair.getValue());  // 25

        Pair<Integer, String> swapped = pair.swap();
        System.out.println(swapped);          // Pair[25, age]
    }
}