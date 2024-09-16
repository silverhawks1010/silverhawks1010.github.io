const textElement = document.getElementById("MyDesc");
const cursorElement = document.getElementById("cursor")
const text = "Développeur passioné par son métier et cherchant de nouvelle connaissance perpétuellement.";
const typingSpeed = 50; // Vitesse de l'animation (en ms)
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        cursorElement.style.display = 'none'; // Masque le curseur à la fin de l'animation
    }
}
