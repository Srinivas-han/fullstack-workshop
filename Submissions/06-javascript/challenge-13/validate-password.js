const validatePassword = (password) => {
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

  // Validation rules using array of objects
  const rules = [
    {
      check: password.length >= 8,
      error: "Too short (minimum 8 characters)",
      suggestion: "Use at least 8 characters"
    },
    {
      check: /[A-Z]/.test(password),
      error: "Missing uppercase letter",
      suggestion: "Add an uppercase letter (A-Z)"
    },
    {
      check: /[a-z]/.test(password),
      error: "Missing lowercase letter",
      suggestion: "Add a lowercase letter (a-z)"
    },
    {
      check: /[0-9]/.test(password),
      error: "Missing number",
      suggestion: "Add at least one number (0-9)"
    },
    {
      check: /[!@#$%^&*()_+\-=]/.test(password),
      error: "Missing special character",
      suggestion: "Add a special character (!@#$%^&*)"
    },
    {
      check: !commonPasswords.includes(password.toLowerCase()),
      error: "Password is too common",
      suggestion: "Avoid common or easily guessed passwords"
    }
  ];

  // Apply rules using array methods
  rules
    .filter(rule => !rule.check)
    .forEach(rule => {
      errors.push(rule.error);
      suggestions.push(rule.suggestion);
    });

  // Score calculation using reduce
  score = [
    Math.min(password.length * 5, 40),
    /[A-Z]/.test(password) ? 15 : 0,
    /[a-z]/.test(password) ? 15 : 0,
    /[0-9]/.test(password) ? 15 : 0,
    /[!@#$%^&*()_+\-=]/.test(password) ? 15 : 0,
    commonPasswords.includes(password.toLowerCase()) ? -30 : 0
  ].reduce((total, value) => total + value, 0);

  score = Math.max(0, Math.min(score, 100));

  return {
    isValid: errors.length === 0,
    score,
    errors,
    suggestions
  };
};

// Test cases
console.log(validatePassword("abc"));

console.log(validatePassword("MyP@ssw0rd!2024"));
