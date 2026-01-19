

public class Person {

    // Private fields (encapsulation)
    private String name;
    private int age;
    private String email;

    // No-argument constructor
    public Person() {
    }

    // All-arguments constructor
    public Person(String name, int age, String email) {
        this.name = name;
        setAge(age);       // use setter for validation
        setEmail(email);   // use setter for validation
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for age with validation
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
        this.age = age;
    }

    // Getter and Setter for email with validation
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("Email must contain '@'");
        }
        this.email = email;
    }

    // toString() method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }

    // Main method to demonstrate functionality
    public static void main(String[] args) {

        Person p1 = new Person();  // no-arg constructor
        p1.setName("Alice");
        p1.setAge(22);
        p1.setEmail("alice@email.com");

        Person p2 = new Person("John", 25, "john@email.com");
        p2.setAge(30);

        System.out.println(p1);
        System.out.println(p2);
    }
}
