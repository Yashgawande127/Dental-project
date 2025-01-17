// Selecting the form and input elements
const appointmentForm = document.getElementById("appointment-form");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

// Form submission event listener
appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear any existing messages
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validate form inputs
    if (!name || !email || !phone || !service || !date || !time) {
        errorMessage.textContent = "All fields are required. Please fill out the form completely.";
        errorMessage.style.display = "block";
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorMessage.textContent = "Please enter a valid 10-digit phone number.";
        errorMessage.style.display = "block";
        return;
    }

    // If validation passes
    successMessage.textContent = "Your appointment has been successfully booked!";
    successMessage.style.display = "block";

    // Optionally, clear the form
    appointmentForm.reset();
});
