// script.js
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(function (el) {
                el.classList.remove("active");
            });

            // Add 'active' class to the clicked link
            link.classList.add("active");
        });
    });
});
