package oop_advance.payment;

public interface Taxable {

    double calculateTax();

    static double getTaxRate() {
        return 0.18; // 18%
    }
}
