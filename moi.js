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


function switchTheme() {
    const isDark = document.body.classList.contains("dark");

    img.style.opacity = 0;
    setTimeout(() => {
        if (isDark) {
            img.src = "./moi.jpg"; 
        } else {
            img.src = "./light.jpeg"; 
        }
        img.style.opacity = 1;
    }, 300);

    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}
toggleBtn.addEventListener("click", switchTheme);
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
    img.src = "./light.jpeg";
} else {
    img.src = "./moi.jpg";
}
