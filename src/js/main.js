const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  //remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// toggle icon navbar
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll reveal

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal(
  '.home-img, .about-img, .services-container, .portfolio-box, .contact form',
  {
    origin: 'bottom',
  }
);

// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Software Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
