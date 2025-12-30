const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const fieldsStatus = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false
};

// Arrow functions + template literals
const showError = (input, message) => {
  const group = input.parentElement;
  const small = group.querySelector("small");

  small.textContent = `${message}`;
  small.style.visibility = "visible";
  group.classList.remove("valid");
};

const showSuccess = (input) => {
  const group = input.parentElement;
  const small = group.querySelector("small");

  small.style.visibility = "hidden";
  group.classList.add("valid");
};

// Array method (every)
const checkFormValidity = () => {
  const allValid = Object.values(fieldsStatus).every(Boolean);
  submitBtn.disabled = !allValid;
  submitBtn.classList.toggle("enabled", allValid);
};

const validateUsername = () => {
  const value = username.value.trim();
  const regex = /^[a-zA-Z0-9]{3,15}$/;

  fieldsStatus.username = regex.test(value);

  fieldsStatus.username
    ? showSuccess(username)
    : showError(username, `3–15 chars, letters & numbers only`);

  checkFormValidity();
};

const validateEmail = () => {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  fieldsStatus.email = regex.test(value);

  fieldsStatus.email
    ? showSuccess(email)
    : showError(email, `Enter a valid email address`);

  checkFormValidity();
};

const validatePassword = () => {
  const value = password.value;
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  fieldsStatus.password = regex.test(value);

  fieldsStatus.password
    ? showSuccess(password)
    : showError(password, `8+ chars, 1 uppercase, 1 number, 1 special char`);

  validateConfirmPassword();
  checkFormValidity();
};

const validateConfirmPassword = () => {
  fieldsStatus.confirmPassword =
    confirmPassword.value === password.value &&
    confirmPassword.value !== "";

  fieldsStatus.confirmPassword
    ? showSuccess(confirmPassword)
    : showError(confirmPassword, `Passwords do not match`);

  checkFormValidity();
};

// Event listeners
username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

form.addEventListener("submit", (e) => {
  if (!Object.values(fieldsStatus).every(Boolean)) {
    e.preventDefault();
    alert(`Please fix errors before submitting`);
  }
});
