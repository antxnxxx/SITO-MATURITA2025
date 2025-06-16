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

// Hamburger menu toggle con delega
document.addEventListener('click', function(e) {
    if (e.target.closest('.hamburger')) {
        const navLinks = document.querySelector('nav ul');
        if (navLinks) {
            navLinks.classList.toggle('open');
        }
    }
});

// Fade-in effect on scroll
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
