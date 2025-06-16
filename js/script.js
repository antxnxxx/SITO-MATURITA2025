// Scroll button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Hamburger menu toggle
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
}

// Fade-in effect on scroll
function setupSectionObserver() {
    const sections = document.querySelectorAll('.section-base');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Setup after initial load
document.addEventListener('DOMContentLoaded', () => {
    setupHamburgerMenu();
    setupSectionObserver();
});

// Se usi caricamento dinamico:
// Dopo aver inserito nuovi contenuti:
// setupHamburgerMenu();
// setupSectionObserver();
