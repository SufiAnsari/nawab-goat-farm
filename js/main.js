// NAWAB GOAT FARM - High Performance Interactivity & Conversion Logic

document.addEventListener('DOMContentLoaded', function () {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (menuToggle && mobileMenu && navbar) {
        menuToggle.addEventListener('click', function () {
            const isOpen = !mobileMenu.classList.contains('max-h-0');

            if (!isOpen) {
                // Open menu
                mobileMenu.classList.remove('max-h-0', 'opacity-0');
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                mobileMenu.style.opacity = '1';

                navbar.style.borderRadius = '1.25rem';
                menuToggle.setAttribute('aria-expanded', 'true');
                menuToggle.innerHTML = '<svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
            } else {
                // Close menu
                mobileMenu.style.maxHeight = null;
                mobileMenu.style.opacity = null;
                mobileMenu.classList.add('max-h-0', 'opacity-0');

                navbar.style.borderRadius = null;
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
            }
        });
    }

    // 2. Navbar scroll effect
    let isScrolling = false;
    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                if (window.scrollY > 40) {
                    navbar.classList.add('shadow-xl', 'bg-white');
                    navbar.classList.remove('bg-white/95');
                } else {
                    navbar.classList.remove('shadow-xl', 'bg-white');
                    navbar.classList.add('bg-white/95');
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // 3. Preset Chips Interactivity (Home & Contact pages)
    const chipButtons = document.querySelectorAll('#preset-chips .chip-option');
    const serviceSelect = document.getElementById('form-service');
    const messageTextarea = document.getElementById('form-message');

    if (chipButtons.length > 0) {
        const presets = {
            'palai': {
                serviceVal: 'palai',
                msgText: 'Hi Nawab Goat Farm, I am interested in Palai Boarding services for my goats. Please share pricing and details.'
            },
            'buy-goat': {
                serviceVal: 'buy-goat',
                msgText: 'Hi Nawab Goat Farm, I want to purchase pure breed goats (Sirohi/Beetal/Osmanabadi). Please share current availability.'
            },
            'visit': {
                serviceVal: 'visit',
                msgText: 'Hi Nawab Goat Farm, I would like to schedule a visit to your farm. Please share timing and location details.'
            }
        };

        chipButtons.forEach(chip => {
            chip.addEventListener('click', function () {
                chipButtons.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');

                const serviceType = this.getAttribute('data-service');
                if (presets[serviceType]) {
                    if (serviceSelect) serviceSelect.value = presets[serviceType].serviceVal;
                    if (messageTextarea) messageTextarea.value = presets[serviceType].msgText;
                }
            });
        });
    }

    // 4. Form validation and WhatsApp Redirection
    const contactForms = document.querySelectorAll('form[data-netlify="true"]');

    contactForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[name="name"]');
            const phoneInput = this.querySelector('input[name="phone"]');
            const serviceInput = this.querySelector('select[name="service"]');
            const messageInput = this.querySelector('textarea[name="message"]');

            let isValid = true;

            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('border-red-500');
            } else if (nameInput) {
                nameInput.classList.remove('border-red-500');
            }

            if (phoneInput && phoneInput.value.trim() === '') {
                isValid = false;
                phoneInput.classList.add('border-red-500');
            } else if (phoneInput) {
                phoneInput.classList.remove('border-red-500');
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

            let text = `*New Inquiry from Nawab Goat Farm Website*\n\n`;
            text += `👤 *Name:* ${nameInput.value}\n`;
            if (phoneInput && phoneInput.value) text += `📞 *Phone:* ${phoneInput.value}\n`;
            if (serviceInput && serviceInput.value) {
                const serviceLabel = serviceInput.options[serviceInput.selectedIndex] ? serviceInput.options[serviceInput.selectedIndex].text : serviceInput.value;
                text += `🏷️ *Interest:* ${serviceLabel}\n`;
            }
            text += `💬 *Message:* ${messageInput.value}`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=919860487836&text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
            form.reset();
        });
    });

});
