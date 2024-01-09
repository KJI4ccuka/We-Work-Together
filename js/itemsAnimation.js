document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    sr.reveal('.item', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });

    sr.reveal('.itemText', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        delay: 300,
        easing: 'ease-out',
    });

    sr.reveal('.itemBlue', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        delay: 600,
        easing: 'ease-out',
    });
});
