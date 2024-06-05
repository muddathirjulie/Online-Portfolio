const skillsContainer = document.querySelector('.skills-container');

// Add event listener to adjust container width on resize
window.addEventListener('resize', () => {
  skillsContainer.scrollLeft = 0; // Reset scroll position on resize
  skillsContainer.scrollWidth = skillsContainer.offsetWidth; // Adjust container width
});

// Prevent horizontal scroll on swipe
let isDragging = false;
let startX, scrollLeft;

skillsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - skillsContainer.offsetLeft;
  scrollLeft = skillsContainer.scrollLeft;
});

skillsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

skillsContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

skillsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - skillsContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scrolling speed
  skillsContainer.scrollLeft = scrollLeft - walk;
});
