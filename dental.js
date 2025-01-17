document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu ul");

    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Search functionality
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter a service to search.");
        }
    });
});
