const hambMenu = document.getElementById('hambMenuIcon');
const closeButton = document.querySelector('.main-nav__close-button');
const nav = document.querySelector('.main-nav__list');

if (hambMenu) {
    hambMenu.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}