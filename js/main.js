// NAWAB GOAT FARM - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    // Mobile Menu Toggle (Mini Navbar)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (menuToggle && mobileMenu && navbar) {
        menuToggle.addEventListener('click', function () {
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');

            // Animate container shape
            if (!mobileMenu.classList.contains('hidden')) {
                navbar.classList.remove('rounded-full');
                navbar.classList.add('rounded-3xl');
                // Change icon to close (X)
                menuToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
            } else {
                navbar.classList.add('rounded-full');
                navbar.classList.remove('rounded-3xl');
                // Change icon back to hamburger
                menuToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
            }
        });
    }

    // Navbar scroll effect
    // navbar variable already declared above

    window.addEventListener('scroll', function () {
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
        anchor.addEventListener('click', function (e) {
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

    // Form validation and WhatsApp Redirection
    const contactForms = document.querySelectorAll('form[data-netlify="true"]');

    contactForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default Netlify submission to open WhatsApp

            const nameInput = this.querySelector('input[name="name"]');
            const phoneInput = this.querySelector('input[name="phone"]'); // Might be null in contact.html? No, it has phone input.
            const emailInput = this.querySelector('input[name="email"]');
            const serviceInput = this.querySelector('select[name="service"]');
            const messageInput = this.querySelector('textarea[name="message"]');

            let isValid = true;

            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('border-red-500');
            } else if (nameInput) {
                nameInput.classList.remove('border-red-500');
            }

            if (messageInput && messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('border-red-500');
            } else if (messageInput) {
                messageInput.classList.remove('border-red-500');
            }

            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }

            // Construct WhatsApp Message
            let text = `*New Inquiry from Website*\n\n`;
            text += `*Name:* ${nameInput.value}\n`;
            if (phoneInput && phoneInput.value) text += `*Phone:* ${phoneInput.value}\n`;
            if (emailInput && emailInput.value) text += `*Email:* ${emailInput.value}\n`;
            if (serviceInput && serviceInput.value) text += `*Service Interest:* ${serviceInput.options[serviceInput.selectedIndex].text}\n`;
            text += `*Message:* ${messageInput.value}`;

            // Encode for URL
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=919860487836&text=${encodedText}`;

            // Open in new tab
            window.open(whatsappUrl, '_blank');

            // Optional: Reset form
            form.reset();
        });
    });

    // Active navigation link highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');



    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            // Updated style for pill navbar active state
            if (link.classList.contains('nav-link')) {
                link.classList.add('bg-white', 'text-brand-dark', 'font-bold', 'shadow-sm');
            } else {
                // Mobile menu active state
                link.classList.add('text-brand-green');
            }
        }
    });

});
