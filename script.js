const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.querySelector(".inner-card").classList.toggle("flipped");
    });
});