// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Highlight active navigation link based on scroll position
document.addEventListener('scroll', highlightActiveLink);

function highlightActiveLink() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`nav a[href="#${section.id}"]`);
    
    if (isInViewport(rect)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function isInViewport(rect) {
  return rect.top <= 50 && rect.bottom >= 50;
}
