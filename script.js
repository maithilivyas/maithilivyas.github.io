// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Console Log specific for Recruiters
console.log("%c SYSTEM READY ", "background: #00f3ff; color: #000; font-size: 20px; font-weight: bold;");
console.log("Welcome to Maithili Vyas's Portfolio. If you are looking for the source code, check my GitHub!");

// Glitch Effect trigger (Optional - adds extra flair on hover)
const title = document.querySelector('.glitch');
title.addEventListener('mouseover', () => {
    title.style.textShadow = "2px 2px 0px #ff00ff, -2px -2px 0px #00ffff";
});
title.addEventListener('mouseout', () => {
    title.style.textShadow = "0 0 20px var(--neon-blue)";
});
