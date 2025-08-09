// JavaScript for modal and mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const openContactButton = document.getElementById('openContactModal');
    const openContactButtonMobile = document.getElementById('openContactModalMobile');
    const modal = document.getElementById('contact-modal');
    const closeButton = document.querySelector('.close-button');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Function to open the modal
    const openModal = () => {
        modal.style.display = 'block';
    };

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Open modal on PC button click
    if (openContactButton) {
        openContactButton.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    // Open modal on mobile button click
    if (openContactButtonMobile) {
        openContactButtonMobile.addEventListener('click', (e) => {
            e.preventDefault();
            closeMobileMenu();
            openModal();
        });
    }

    // Close modal on close button click
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeModal();
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});