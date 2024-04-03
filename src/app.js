const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

function closeMenu() {
  navList.classList.remove('show');
}

hamburgerButton.addEventListener('click', toggleButton);

document.addEventListener('touchstart', function(event) {
  if (!event.target.closest('#nav-list') && !event.target.closest('#hamburger')) {
    closeMenu();
  }
});

document.addEventListener('scroll', closeMenu);

document.querySelectorAll('#nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
    closeMenu();
  });
});
