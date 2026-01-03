// Track mouse movement
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Update CSS variables for the flashlight position
    document.documentElement.style.setProperty('--cursor-x', x + 'px');
    document.documentElement.style.setProperty('--cursor-y', y + 'px');
});

// Optional: Add a subtle parallax effect to text
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    document.querySelector('.hero').style.transform = `translate(${moveX}px, ${moveY}px)`;
});
