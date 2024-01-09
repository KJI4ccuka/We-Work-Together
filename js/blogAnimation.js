document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal();

    // Анимация блока .blogWrap
    sr.reveal('.blogWrap', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });

    // Анимация текстового блока .blogItemText
    sr.reveal('.blogItemText', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });

    // Анимация блока с изображением .blogItemImage
    sr.reveal('.blogItemImage', {
        duration: 800,
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-out',
    });
});
