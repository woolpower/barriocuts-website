document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
            });
        });

    }

    // Header Scroll Effect
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.style.background = "#000";
        } else {
            header.style.background = "rgba(0,0,0,0.85)";
        }

    });

    // Reveal Sections
    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < trigger) {
                section.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealSections);

    revealSections();

});