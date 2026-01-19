package oop_advance.payment;

public class PaymentTest {

    public static void main(String[] args) {

        Payable[] payables = {
                new Invoice("P001", "Laptop", 2, 1000),
                new Employee("Satya", 5000)
        };

        double total = 0;

        for (Payable p : payables) {
            p.printPaymentInfo();
            total += p.getPaymentAmount();
        }

        System.out.println("Total: Rs." + total);
    }
}
