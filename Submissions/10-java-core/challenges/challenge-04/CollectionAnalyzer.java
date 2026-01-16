package Assignments;

import java.util.*;
import java.util.stream.*;

public class CollectionAnalyzer {

    // Groups words by their length
    public static Map<Integer, List<String>> groupByLength(List<String> words) {
        return words.stream()
                    .collect(Collectors.groupingBy(String::length));
    }

    // Calculates character frequency across all words
    public static Map<Character, Long> charFrequency(List<String> words) {
        return words.stream()
                    .flatMap(word -> word.chars().mapToObj(c -> (char) c))
                    .collect(Collectors.groupingBy(
                            c -> c,
                            Collectors.counting()
                    ));
    }

 
    public static void main(String[] args) {

        List<String> words1 = Arrays.asList("hi", "bye", "hello", "ok");
        System.out.println(groupByLength(words1));
        // {2=[hi, ok], 3=[bye], 5=[hello]}

        List<String> words2 = Arrays.asList("aab", "bc");
        System.out.println(charFrequency(words2));
        // {a=2, b=2, c=1}
    }
}
