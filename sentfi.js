document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", function () {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY < lastScrollY) {
        // Scrolling up
        navbar.classList.add('visible');
    } else {
        // Scrolling down
        navbar.classList.remove('visible');
    }

    lastScrollY = window.scrollY;
});
