document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    sr.reveal('.visionWrap', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });

    sr.reveal('.visionImage', {
        duration: 800,
        origin: 'left',
        distance: '20px',
        delay: 300,
        easing: 'ease-out',
    });

    sr.reveal('.visionText', {
        duration: 800,
        origin: 'right',
        distance: '20px',
        delay: 600,
        easing: 'ease-out',
    });
});
