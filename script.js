// This observes when elements enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// We tell it to watch everything with the class 'scroll-effect'
const hiddenElements = document.querySelectorAll('.scroll-effect');
hiddenElements.forEach((el) => observer.observe(el));
