// nav.js

// Select elements
const hamburgerButtons = document.querySelectorAll('.hamburger');
const navList = document.getElementById('nav-list');
const projectCards = document.querySelectorAll('.project-card');

// Navigation toggle functions
function toggleMenu() {
  navList.classList.toggle('show');
}

function closeMenu() {
  navList.classList.remove('show');
}

// Handle click on project cards
function handleCardClick(event) {
  const clickedCard = event.currentTarget;
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Reset all cards
    projectCards.forEach(card => {
      card.style.transform = 'scale(1)';
      card.style.zIndex = '0';
    });

    // Enlarge clicked card
    clickedCard.style.transform = 'scale(3)';
    clickedCard.style.zIndex = '1';

    // Shrink other cards
    projectCards.forEach(card => {
      if (card !== clickedCard) {
        card.style.transform = 'scale(0.5)';
        card.style.zIndex = '0';
      }
    });
  }
}

// Event listeners
hamburgerButtons.forEach(button => {
  button.addEventListener('click', toggleMenu);
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.project-card')) {
    projectCards.forEach(card => {
      card.style.transform = 'scale(1)';
      card.style.zIndex = '0';
    });
  }
});

document.addEventListener('touchstart', function(event) {
  if (!event.target.closest('#nav-list') && !event.target.closest('.hamburger')) {
    closeMenu();
  }
});

document.addEventListener('scroll', closeMenu);

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', handleCardClick);
});

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
