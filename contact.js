document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            successMessage.style.display = "none";
            errorMessage.textContent = "Please fill out all fields.";
            errorMessage.style.display = "block";
        } else if (!validateEmail(email)) {
            successMessage.style.display = "none";
            errorMessage.textContent = "Please enter a valid email address.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            successMessage.textContent = "Your message has been sent successfully!";
            successMessage.style.display = "block";
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
