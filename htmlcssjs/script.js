const cards = document.querySelectorAll(".card");

// alert("explore the world of reading!");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.querySelector(".inner-card").classList.toggle("flipped");
    });
});

let newTitle = document.getElementById("archive-title");

let colors = [
    "#8B5CF6", // Violet
    "#0EA5E9", // Ocean blue
    "#14B8A6", // Teal
    "#6366F1", // Indigo
    "#C084FC", // Mystic purple
    "#D6B36A"  // Antique gold
];
let currentColorIndex = 0;

newTitle.addEventListener("click", () => {
    newTitle.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
