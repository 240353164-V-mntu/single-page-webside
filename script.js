document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// CTA button interaction
const ctaButton = document.querySelector('.cta-btn');
ctaButton.addEventListener('click', () => {
  alert('Welcome to the South African Government Website! Explore our services.');
});

// Navbar active link highlighting on scroll
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.navbar ul li a');

  sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              document.querySelector('.navbar ul li a[href*=' + id + ']').classList.add('active');
          });
      }
  });
});

// Toggle mobile navigation (if required)
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Change background of header when scrolling down
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
