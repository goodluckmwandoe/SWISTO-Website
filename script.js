// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tab Functionality
function showTab(tab) {
    document.getElementById('hotel-tab').style.display = tab === 'hotel' ? 'block' : 'none';
    document.getElementById('supplier-tab').style.display = tab === 'supplier' ? 'block' : 'none';
    
    // Update button styles
    document.getElementById('hotel-tab-btn').classList.toggle('btn-primary', tab === 'hotel');
    document.getElementById('hotel-tab-btn').classList.toggle('btn-outline', tab !== 'hotel');
    document.getElementById('supplier-tab-btn').classList.toggle('btn-primary', tab === 'supplier');
    document.getElementById('supplier-tab-btn').classList.toggle('btn-outline', tab !== 'supplier');
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        this.reset();
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
