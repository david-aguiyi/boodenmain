document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", function () {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    });
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY === 0) {
        // At the top of the page
        navbar.classList.remove("visible");
    } else {
        // Not at the top of the page
        navbar.classList.add("visible");
    }

    lastScrollY = window.scrollY;
});

// Optional: If you want the navbar to become visible if the user reloads the page and is not at the top
window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("visible");
    }
});

// Optional: If you want the navbar to become visible if the user reloads the page and is not at the top
window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("visible");
    }
});

function copyAddress() {
    const addressInput = document.getElementById("contractAddress").value;
    navigator.clipboard
        .writeText(addressInput)
        .then(() => {
            const copyButton = document.getElementById("copyButton");
            copyButton.classList.add("copied");
            copyButton.textContent = "Copied!";

            setTimeout(() => {
                copyButton.classList.remove("copied");
                copyButton.textContent = "Copy";
            }, 2000);
        })
        .catch((err) => {
            console.error("Could not copy text: ", err);
        });
}

function copyAddress2() {
    const addressInput = document.getElementById("newcontractAddress").value;
    navigator.clipboard
        .writeText(addressInput)
        .then(() => {
            const copyButton = document.getElementById("copyButton2");
            copyButton.classList.add("copied");
            copyButton.textContent = "Copied!";

            setTimeout(() => {
                copyButton.classList.remove("copied");
                copyButton.textContent = "Copy";
            }, 2000);
        })
        .catch((err) => {
            console.error("Could not copy text: ", err);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const lines = hamburger.querySelectorAll(".line");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        lines[0].classList.toggle("line1");
        lines[1].classList.toggle("line2");
        lines[2].classList.toggle("line3");
    });
});
