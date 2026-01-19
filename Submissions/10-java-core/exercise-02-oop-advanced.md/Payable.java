package oop_advance.payment;

public interface Payable {

    double getPaymentAmount();

    default void printPaymentInfo() {
        System.out.println("Payment Amount: Rs." + getPaymentAmount());
    }
}
