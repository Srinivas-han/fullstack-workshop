const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");

const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");

const fieldsStatus ={
    username: false,
    email: false,
    password: false,
    confirmPassword: false
};

function showError(input,message){
    const group = input.parentElement;
    const small=group.querySelector("small");
    small.textContent=message;
    small.style.visibility="visible";
    group.classList.remove("valid");
}

function showSuccess(input){
    const group=input.parentElement;
    const small=group.querySelector("small");
    small.style.visibility="hidden";
    group.classList.add("valid");
}

function checkFormValidity() {
    const allValid = Object.values(fieldsStatus).every(Boolean);
    submitBtn.disabled = !allValid;
    
    if(allValid){
        submitBtn.classList.add("enabled");
    } else{
        submitBtn.classList.remove("enabled");
    }
}

function validateUsername() {
    const value = username.value.trim();
    const regex = /^[a-zA-Z0-9]{3,15}$/;

    if (!regex.test(value)) {
        showError(username, "3-15 chars, letters & numbers only");
        fieldsStatus.username = false;
    } else {
        showSuccess(username);
        fieldsStatus.username = true;
    }
    checkFormValidity();
}


function validateEmail() {
    const value = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
        showError(email, "Enter a valid email address");
        fieldsStatus.email = false;
    } else {
        showSuccess(email);
        fieldsStatus.email = true;
    }
    checkFormValidity();
}
function validatePassword() {
    const value = password.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!regex.test(value)) {
        showError(password, "8+ chars, 1 uppercase, 1 number, 1 special char");
        fieldsStatus.password = false;
    } else {
        showSuccess(password);
        fieldsStatus.password = true;
    }
    validateConfirmPassword();
    checkFormValidity();
}

function validateConfirmPassword() {
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        showError(confirmPassword, "Passwords do not match");
        fieldsStatus.confirmPassword = false;
    } else {
        showSuccess(confirmPassword);
        fieldsStatus.confirmPassword = true;
    }
    checkFormValidity();
}



username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);



form.addEventListener("submit", function (e) {
    if (!Object.values(fieldsStatus).every(Boolean)) {
        e.preventDefault();
        alert("Please fix errors before submitting");
    }
});
