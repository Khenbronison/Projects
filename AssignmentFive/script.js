const form = document.getElementById("signUpForm");

form.addEventListener("submit", (event) => {
    const fullName = document.getElementById("fullName");
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const button =document.getElementById("submit")
    
    if (fullName.value.length < 3) {
        alert("Your name should be more than 3 characters");
        event.preventDefault();
        return;
    }

    if (userName.value.length < 3) {
        alert("Your username should be more than 3 characters");
        event.preventDefault();
        return;
    }

    if (email.value.length < 3) {
        alert("Your email should be more than 3 characters");
        event.preventDefault();
        return;
    }

    if (password.value.length < 3) {
        alert("Your password should be more than 3 characters");
        event.preventDefault();
        return;
    }

    if (confirmPassword.value !== password.value) {
        alert("Passwords do not match");
        event.preventDefault();
        return;
    }

    alert("Registration successful!");
    event.preventDefault();
    form.reset();
});
