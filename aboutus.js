document.addEventListener("DOMContentLoaded", () => {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 20px 30px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
        });
    });
});
