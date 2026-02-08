// NAWAB GOAT FARM - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('shadow-sm');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('show');
                    }
                }
            }
        });
    });
    
    // Lazy loading for images (fallback for browsers without native support)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for older browsers
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Form validation
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]');
            const message = this.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            if (name && name.value.trim() === '') {
                isValid = false;
                name.classList.add('border-red-500');
            } else if (name) {
                name.classList.remove('border-red-500');
            }
            
            if (message && message.value.trim() === '') {
                isValid = false;
                message.classList.add('border-red-500');
            } else if (message) {
                message.classList.remove('border-red-500');
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Active navigation link highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active', 'text-brand-dark', 'font-medium');
        }
    });
    
});
