
/* =================================
   PREPTRACK - AUTHENTICATION
   Developed by NEXORA
================================= */

function showMessage(form, message, type) {

    let messageBox = form.querySelector(".auth-message");

    if (!messageBox) {
        messageBox = document.createElement("p");
        messageBox.className = "auth-message";
        messageBox.style.marginTop = "15px";
        messageBox.style.fontSize = "13px";
        messageBox.style.lineHeight = "1.5";
        form.appendChild(messageBox);
    }

    messageBox.textContent = message;
    messageBox.style.color =
        type === "success" ? "#86EFAC" : "#FCA5A5";
}


// LOGIN VALIDATION

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!loginForm.reportValidity()) return;

        showMessage(
            loginForm,
            "Login interface is ready! Supabase authentication is coming next.",
            "success"
        );

    });

}


// REGISTRATION VALIDATION

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Clear the old mismatch error whenever the user edits either password

    [password, confirmPassword].forEach(function (field) {

        field.addEventListener("input", function () {
            confirmPassword.setCustomValidity("");
        });

    });

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        confirmPassword.setCustomValidity("");

        if (!registerForm.reportValidity()) return;

        if (password.value !== confirmPassword.value) {

            confirmPassword.setCustomValidity("Passwords do not match.");

            confirmPassword.reportValidity();

            showMessage(
                registerForm,
                "Please make sure both passwords match.",
                "error"
            );

            return;
        }

        showMessage(
            registerForm,
            "✓ Passwords match! Registration form validated successfully. Supabase integration is still pending.",
            "success"
        );

    });

}
