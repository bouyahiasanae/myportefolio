const texts = ["Développeur Web", "Spécialiste en Cyber Sécurité"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing-text').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 150);
    }
})();
const toggleBtn = document.getElementById("theme-toggle");
const img = document.getElementById("profile-img");

toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    img.style.opacity = 0;

    setTimeout(() => {
        if (isDark) {
            img.src = "../portefolio/light.jpeg";
            toggleBtn.textContent = "☀️";
        } else {
            img.src = "../portefolio/moi.jpg";
            toggleBtn.textContent = "🌙";
        }
        img.style.opacity = 1;
    }, 300);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 4000);
});

