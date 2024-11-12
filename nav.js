document.addEventListener("DOMContentLoaded", function () {
    const navLinks = [
        { title: "Home", url: "index.html", class: "neon-green-link" },
        { title: "Projects", url: "projects.html", class: "neon-green-link" },
        { title: "About me", url: "about.html", class: "neon-green-link" },
        { title: "Contact", url: "contact.html", class: "neon-green-link" },
    ];

    const navContainer = document.getElementById("dynamicNav");
    const footerContainer = document.getElementById("dynamicFooter");

    if (!navContainer) {
        console.error("Element with ID 'dynamicNav' not found.");
        return;
    }

    if (!footerContainer) {
        console.error("Element with ID 'dynamicFooter' not found.");
        return;
    }

    const hamburger = document.getElementById("hamburger");

    // Add numbered list items for navigation links
    navLinks.forEach((link, index) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = link.title;
        anchor.href = link.url;
        anchor.classList.add("nav-number");
        anchor.setAttribute("data-number", index + 1);
        if (link.class) {
            anchor.classList.add(link.class);
        }

        // Check if the link corresponds to the current page
        if (link.url === window.location.pathname) {
            anchor.classList.add("active");
        }

        listItem.appendChild(anchor);
        navContainer.appendChild(listItem);
    });

    // Create button element
    const aboutButton = document.createElement("li");
    aboutButton.classList.add("nav-button");
    const buttonAnchor = document.createElement("a");
    buttonAnchor.href = "https://drive.google.com/file/d/1LBtFaJPF-4K4L0ro1N0GyRJ1LoKiJdpH/view?usp=sharing";
    buttonAnchor.textContent = "Resume";
    buttonAnchor.target = "_blank";

    // Add hover effect
    buttonAnchor.addEventListener("mouseenter", function () {
        aboutButton.classList.add("hovered");
    });

    buttonAnchor.addEventListener("mouseleave", function () {
        aboutButton.classList.remove("hovered");
    });

    aboutButton.appendChild(buttonAnchor);
    navContainer.appendChild(aboutButton);

    const currentYear = new Date().getFullYear();
    const footerContent = document.createElement("footer");
    footerContent.textContent = `${currentYear} Developed by Muddathir Julie`;
    footerContainer.appendChild(footerContent);

    // Toggle navigation menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navContainer.classList.toggle("active");
        });
    } else {
        console.error("Element with ID 'hamburger' not found.");
    }
});
