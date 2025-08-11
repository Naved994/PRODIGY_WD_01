// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Optional: Add hover effect with JS (CSS handles it, but for extra interactivity)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.fontWeight = 'bold';
    });
    link.addEventListener('mouseleave', function() {
        this.style.fontWeight = '';
    });
});

// Add active class on hover for nav links (for extra color pop)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    link.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});
