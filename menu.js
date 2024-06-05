document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
