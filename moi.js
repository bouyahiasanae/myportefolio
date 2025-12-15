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
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        img.src = "./light.jpeg";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        img.src = "./moi.jpg";
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
    img.src = "./light.jpg";
} else {
    img.src = "./moi.jpe";
}
