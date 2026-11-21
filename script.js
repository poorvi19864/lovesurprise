// Find the buttons and message area
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// YES button
yesBtn.addEventListener("click", function() {
    window.location.href = "memories.html";
});

// Function to move NO button
function moveNoButton() {

    noBtn.style.position = "fixed";

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * Math.max(0, maxX - 20) + 10;
    const randomY = Math.random() * Math.max(0, maxY - 20) + 10;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Run away from the mouse
noBtn.addEventListener("pointerenter", moveNoButton);

// Run away from touch
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });
