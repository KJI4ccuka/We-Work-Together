document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-icon');
    const mainMenu = document.querySelector('.mainMenu');

    menuButton.addEventListener('click', function () {
        mainMenu.classList.toggle('active');
    });
});