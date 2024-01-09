document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    // Анимация блока .contactForm
    sr.reveal('.contactForm', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });

    // Анимация блока .contactImg
    sr.reveal('.contactImg', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        delay: 300,
        easing: 'ease-out',
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    sr.reveal('.mainText', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });
});
