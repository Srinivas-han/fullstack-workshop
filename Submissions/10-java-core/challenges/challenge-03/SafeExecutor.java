package Assignments;

import java.util.Optional;

public class SafeExecutor {

    @FunctionalInterface
    interface ThrowingSupplier<T> {
        T get() throws Exception;
    }

    public static <T> Optional<T> safeExecute(ThrowingSupplier<T> supplier) {
        try {
            return Optional.ofNullable(supplier.get());
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    
    public static void main(String[] args) {

        Optional<Integer> success =
                safeExecute(() -> Integer.parseInt("123"));
        System.out.println(success);   // Optional[123]

        Optional<Integer> failure =
                safeExecute(() -> Integer.parseInt("abc"));
        System.out.println(failure);   // Optional.empty
    }
}
