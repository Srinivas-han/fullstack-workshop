
public class BankAccount {

    // Static fields
    private static String bankName = "MyBank";
    private static int totalAccounts = 0;
    private static int accountCounter = 1000;

    // Instance fields
    private int accountNumber;
    private String holderName;
    private double balance;

    // Constructor
    public BankAccount(String holderName, double initialBalance) {
        this.accountNumber = ++accountCounter;
        this.holderName = holderName;
        this.balance = initialBalance;
        totalAccounts++;
    }

    // Static method
    public static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    // Instance methods
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getHolderName() {
        return holderName;
    }

    // Main method to demonstrate functionality
    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Alice", 1000);
        BankAccount acc2 = new BankAccount("Bob", 500);

        acc1.deposit(200);
        acc2.withdraw(100);

        System.out.println("Account " + acc1.getAccountNumber() +
                " Balance: " + acc1.getBalance());

        System.out.println("Account " + acc2.getAccountNumber() +
                " Balance: " + acc2.getBalance());

        System.out.println(BankAccount.getBankInfo());
    }
}
