function validatePassword(password) {
    const errors = [];
    const suggestions = [];
    let score = 0;

 
    const commonPasswords = [
        "password",
        "123456",
        "qwerty",
        "admin",
        "letmein",
        "welcome"
    ];

  
    const lengthCheck = password.length >= 8;
    const upperCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCheck = /[!@#$%^&*()_+\-=]/.test(password);
    const commonCheck = !commonPasswords.includes(password.toLowerCase());

  

    if (!lengthCheck) {
        errors.push("Too short (minimum 8 characters)");
        suggestions.push("Use at least 8 characters");
    }

    if (!upperCheck) {
        errors.push("Missing uppercase letter");
        suggestions.push("Add an uppercase letter (A-Z)");
    }

    if (!lowerCheck) {
        errors.push("Missing lowercase letter");
        suggestions.push("Add a lowercase letter (a-z)");
    }

    if (!numberCheck) {
        errors.push("Missing number");
        suggestions.push("Add at least one number (0-9)");
    }

    if (!specialCheck) {
        errors.push("Missing special character");
        suggestions.push("Add a special character (!@#$%^&*)");
    }

    if (!commonCheck) {
        errors.push("Password is too common");
        suggestions.push("Avoid common or easily guessed passwords");
    }

   


    score += Math.min(password.length * 5, 40);

    if (upperCheck) score += 15;
    if (lowerCheck) score += 15;
    if (numberCheck) score += 15;
    if (specialCheck) score += 15;

   
    if (!commonCheck) score -= 30;

  
    score = Math.max(0, Math.min(score, 100));

    return {
        isValid: errors.length === 0,
        score,
        errors,
        suggestions
    };
}



console.log(validatePassword("abc"));

console.log(validatePassword("MyP@ssw0rd!2024"));
