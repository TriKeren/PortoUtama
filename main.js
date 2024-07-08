function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('hidden');
}
anime({
    targets: '#animate-text',
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 5000,
    easing: 'easeOutExpo',
});

anime({
    targets: '#dev-animate',
    translateX: [100, 0],
    opacity: [0, 1],
    duration: 5000,
    easing: 'easeOutExpo',
});


anime({
    targets: '#animate-image',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 5000,
    delay: 300,
    easing: 'easeOutExpo',
});

anime({
    targets: '#cntct-animate',
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 5000,
    delay: 300,
    easing: 'easeOutExpo',
});

anime({
    targets: '#cv-animate',
    translateX: [100, 0],
    opacity: [0, 1],
    duration: 5000,
    delay: 300,
    easing: 'easeOutExpo',
});




