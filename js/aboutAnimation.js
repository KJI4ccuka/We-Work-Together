document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    sr.reveal('.aboutTitle', {
        duration: 800,
        origin: 'left',
        distance: '20px',
        easing: 'ease-out',
    });

    sr.reveal('.aboutDescription', {
        duration: 800,
        origin: 'left',
        distance: '20px',
        delay: 300,
        easing: 'ease-out',
    });

    sr.reveal('.aboutImage', {
        duration: 800,
        origin: 'left',
        distance: '20px',
        delay: 600,
        easing: 'ease-out',
    });
});
